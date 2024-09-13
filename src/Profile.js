import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";


const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const [loginData, setLoginData] = useState({
        email: "historia88790@gmail.com",
        password: "54321",
    });
    useEffect(() => {
        if (!token) {
            navigate("/authentication")
        } else { navigate("/profile") }
        getUser();
    }, []);
    const handleprofile = async () => {
        navigate("/");
    }

    const getUser = async () => {
        const response = await axios.post(`${API_URL}/users/login`, loginData);
        setUser(response.data.data.user)
    }
    const Lesson = () => {
        const lesson = ['Link-List', 'API', 'ReactJS', 'Router', 'Login System'];
        return (
            <div>
                <ul>
                    {
                        lesson.map((lesson, index) => (
                            <li key={index}>{lesson}</li>
                        ))
                    }
                </ul>
            </div>
        )
    };
    return (
        
        <div className="profile">
            <button className="back" onClick={async () => { handleprofile() }}>&#10094;.  Back</button>
            <br></br><img src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/402129708_1544955902747097_7666340664441596082_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WD0PiCupnr8Q7kNvgGL6awN&_nc_ht=scontent.fvte2-2.fna&oh=00_AYCF8TtD5VkdakFBmY_0xGGHqiG7y_mNSJxCEuEmqHj-aQ&oe=66E88B2D"></img>
            <h1>{user ? `${user.first_name} ${user.surname}` : ''}</h1>
            <p>{user ? `Email: ${user.email}` : ''}</p>
            <p>{user ? `Tel: ${user.phone_number}` : ''}</p>
            <form className="form">
                <h2>Learning JS React web development workshop</h2>
                <p>It's been about 2 week that i was participant of JS React web Development Workshop</p>
                <p>there's many important thing i have learn such as:</p>
                <hr></hr><Lesson></Lesson>
            </form>
            <style jsx>{`
            .profile{
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                margin-top: 20px;
                background-color: #white;
            }
            .back{
                padding: 7px 15px;
                front-size: 16px;
                background-color: red;
                color: white;
                border: none;
                cursor: pointer;
                margin: 0px;
                margin-bottom: 50px;
                }
            img {
                width: 200px;
                height: 200px;
                border-radius: 50%;
                object-fit: cover;
                margin: 0 auto;
                border: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 10);
            }
              .form {
                display: flex;
                flex-direction: column;
                width: 700px;
                padding: 20px;
                background-color: #465FFE;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                margin-bottom: 20px;
                color: white;
            }
            h1 {
                font-style: italic;
            }
        `}
            </style>
        </div>
    )
}
export default Profile;
