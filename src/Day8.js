import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const Day8 = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [loginData, setLoginData] = useState({
        email: "historia88790@gmail.com",
        password: "54321",
    });
    const [signupData, setSignupData] = useState({
        first_name: "",
        surname: "",
        email: "",
        phone_number: "",
        password: "",
    });
    const [activeTab, setActiveTab] = useState('login');
    const [isLoading, setIsLoading] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
        fetchMyUser();
    }, []);

    const fetchMyUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(`${API_URL}/users/me`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setUser(response.data.data.data)
        } catch (error) {
            localStorage.removeItem('token')
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post(`${API_URL}/users/login`, loginData);
            if (response.data.status === 'success') {
                const token = response.data.token;
                localStorage.setItem('token', token)
                setUser(response.data.data.user);
                fetchPosts()
                Swal.fire({
                    icon: "success",
                    title: `Logged in`,
                    text: `Welcome ${response.data.data.user.first_name} ${response.data.data.user.surname}`
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "Failed to login",
                text: "Please checking your information"
            })
        } finally {
            setIsLoading(false);
        }
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post(`${API_URL}/users/signup`, signupData);
            if (response.data.status === 'success') {
                const token = response.data.token;
                localStorage.setItem('token', token)
                setUser(response.data.data.user);
                fetchPosts()
                Swal.fire({
                    icon: "success",
                    title: `Logged in`,
                    text: `Welcome ${response.data.data.user.first_name} ${response.data.data.user.surname}`
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "Failed to Sign up",
                text: "Please checking your information"
            })
        } finally {
            setIsLoading(false);
        }
    };
    const handleLogout = async () => {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You gonna log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          confirmButtonText: "Log out",
          cancelButtonText: "cancel",
        });
        if (result.isConfirmed) {
          localStorage.removeItem('token');
          Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "you logged out",
            timer: 1500
          })
          navigate("/authentication");
        }
      }
    const handlePostSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                icon: "warning",
                title: "Please Login first",
                text: "Please Login to perform this action",
            });
            return;
        }
        setIsLoading(true);
        try {
            await axios.post(`${API_URL}/posts`,
                { content: newPost },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewPost('');
            fetchPosts()
            Swal.fire({
                icon: "success",
                title: "Create a new post successfully",
                text: "You have already posted"
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Cannot create a new post",
                text: "somthin went wrong, please try again later"
            })
        } finally {
        }
    }
    const fetchPosts = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            setPosts([]);
            return;
        }
        setIsPostLoading(true);
        try {
            const response = await axios.get(`${API_URL}/posts`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPosts(response.data.data.posts);
        } catch (error) {
            setPosts([]);
        } finally {
            setIsPostLoading(false);
        };
    };

    const formatDateTime = (isoString) => {
        //Create date object from ISO String
        const date = new Date(isoString)
        //Set time to UTC+7
        date.setHours(date.getHours() + 7);
        //Function add 0 number to front
        const padZero = (num) => num.toString().padStart(2, '0');
        //Get date data
        const day = padZero(date.getUTCDate());
        const month = padZero(date.getUTCMonth() + 1); // Start From 0
        const year = padZero(date.getUTCFullYear());
        //Get Time data
        let hours = date.getUTCHours();
        const minutes = padZero(date.getUTCMinutes());
        const ampm = hours >= 12 ? "PM" : "AM";
        //Change to 12 hours type
        hours = hours % 12;
        hours = hours ? hours : 12; //If hours is 0 change to 12
        hours = padZero(hours);
        // Create Strings as result
        return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    }

    const handleDelete = async (postId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                title: "Your're not Login,",
                icon: "warning",
                text: "Please Login to do this action"
            })
            return;
        }

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "your post will be delete forever",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Delete",
            cancelButtonText: "cancel",
        });
        if (result.isConfirmed) {
            try {
                await axios.delete(`${API_URL}/posts/${postId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                Swal.fire("Deleted", "Your post no longer exist", "success");
                fetchPosts();
            } catch (error) {
                Swal.fire(
                    "Error!",
                    error?.response?.data?.message ??
                    "Cannot Delete, Please try again",
                    'error'
                );
            }

        }
    }
    const handleLike = async (postId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                title: "Your're not Login,",
                icon: "warning",
                text: "Please Login to do this action"
            })
            return;
        }
        try {
            const response = await axios.post(
                `${API_URL}/posts/${postId}/like`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(posts.length)
            if (response.data.status === "success") {
                fetchPosts();
                await Swal.fire({
                    icon: "success",
                    title: "Liked",
                    text: "You have like this post",
                    timer: 1500,
                    showCancelButton: false,
                });
            }
        } catch (error) {
            Swal.fire(
                "Error!",
                error?.response?.data?.message ??
                "Cannot Like, Please try again",
                'error'
            );
        }
    }

    return (
        <div className="container">
            <h1> Day 8: Login, Post, CRUD & Router System</h1>
            {isLoading && <div className="Loading">Loading...</div>}

            <div>
                <h2>Hello, {user?.first_name}!</h2>
                <p>Email: {user?.email}</p>
                <p>Phonenumber: {user?.phone_number}</p>
                <p>role: {user?.role}</p>
                <button onClick={handleLogout}>Log out</button>
                <h2>Post</h2>
                <button onClick={() => {
                    fetchPosts();
                }}
                >Refresh post</button>
                <form onSubmit={handlePostSubmit}>
                    <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder='Create new post'
                    ></textarea>
                    <button type="submit" disabled={isLoading}>Create Post</button>
                </form>
                {isPostLoading ? (
                    <div className="loading">Loading Post...</div>
                ) : (
                    <ul>
                        {posts.map((post) => (
                            <li key={post._id}>
                                <button onClick={() => {
                                    handleDelete(post._id)
                                }}
                                > Delete </button>

                                <p>Post Time: {formatDateTime(post.createdAt)}</p>
                                <p>Post by: {post.author.first_name}</p>
                                <p>like: {post.likes ? post.likes.length : 0}</p>
                                <p>{post.content}</p>
                                <button onClick={() => {
                                    handleLike(post._id)
                                }}
                                >Like</button>

                                <button className="edit"><Link to={`/edit/${post._id}`}>Edit</Link></button>
                            </li>
                        ))}
                    </ul>)
                }
            </div>
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .tabs {
                    display: flex;
                    margin-bottom: 20px;
                }
                .tabs button {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    background-color: #f1f1f1;
                    cursor: pointer;
                }
                .tabs button.active {
                    background-color: #4CAF50;
                    color: white;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 20px;
                }
                input, textarea {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    padding: 5px;
                }
                button {
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
                }
                button:disabled {
                    background-color: #cccccc;
                    cursor: not-allowed;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    background-color: #f1f1f1;
                    margin-bottom: 10px;
                    padding: 10px;
                    border-radius: 5px;
                }
                .loading: {
                    text-align: center;
                    padding: 20px;
                    font-style: italic;
                    color: #666;
                }
            `}
            </style>

        </div>
    )
}

export default Day8;