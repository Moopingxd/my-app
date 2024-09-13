import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        surname: "",
        dateOfBirth: "",
        gender: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name == '' || 
            formData.email == '' ||
            formData.gender == '' ||
            formData.surname == '' ||
            formData.message == '' 
        ) {
            await Swal.fire({
                title: "Please Complete Your information",
                text: 'Enter your information',
                icon: 'warning',
                confirmButtonText: 'Okay',
                showCloseButton: true,
            });
        } else {
            // ຖາມລູກຄ້າວ່າຕ້ອງການສົ່ງຂໍ້ມູນແທ້່?

            const isSubmit = await Swal.fire({
                title: "Do you want to sent?",
                text: 'your information will sent',
                icon: 'question',
                confirmButtonText: 'Okay',
                cancelButtonText: "cancel",
                showCloseButton: true,
                showCancelButton: true
            });
            if (!isSubmit.isConfirmed) {
                return;
            } else {
                Swal.fire({
                    title: "Success!",
                    text: 'Your information has been submit',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                });
            }

        }
        onSubmit(formData);
        setFormData({
            name: "",
            email: "",
            surname: "",
            dateOfBirth: "",
            gender: "",
            message: "",
        });

    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                value={formData.name}
                type="text"
                name="name"
                placeholder="name"
            ></input>
            <input
                onChange={handleChange}
                value={formData.surname}
                type="text" name="surname"
                placeholder="surname"></input>
            <input
                onChange={handleChange}
                value={formData.email}
                type="email"
                name="email"
                placeholder="email"
                ></input>
            <input
                onChange={handleChange}
                value={formData.dateOfBirth}
                type="date"
                name="dateOfBirth"
                placeholder="Date of birth"
                ></input>
            <select
                onChange={handleChange}
                value={formData.gender}
                name="gender" >
                <option value=""> Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <textarea
                onChange={handleChange}
                value={formData.message}
                name="message"
                placeholder="message"
                ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

const Day3 = () => {
    const [submissions, setSubmissions] = useState([]);
    const handleSubmit = (formData) => {
        setSubmissions([...submissions, formData]);
    };

    return (
        <div className="container">
            <img
                width={50}
                height={50}
                src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/437365954_271108039408658_931347690873128258_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cz5VyISSLFgQ7kNvgEqNdRM&_nc_ht=scontent.fvte2-2.fna&oh=00_AYAM6mc-wEfpUMTIeAufmKqo3aKaje98b9aCi3abRHxOog&oe=66DC7C28">
            </img>
            <h2>Comment Form</h2>
            <Form onSubmit={handleSubmit}></Form>
            <div className="submissions">
                <h3> Information Recieve</h3>
                {submissions.map((ss, index) => (
                    <div className="submission-item">
                        <p>
                            <strong>Name:</strong> {ss.name}
                        </p>
                        <p>
                            <strong>Surname:</strong> {ss.surname}
                        </p>
                        <p>
                            <strong>Date of Birth</strong> {ss.dateOfBirth}
                        </p>
                        <p>
                            <strong>Gender</strong> {ss.gender}
                        </p>
                        <p>
                            <strong>Message</strong> {ss.message}
                        </p>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                .container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background-color: white;
                    padding: 20px;
                    max-width: 800;
                    text-align: center;
                    margin: 0 auto;
                    align-items:center;
                }
                .form {
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                    padding: 20px;
                    background-color: #E8E9E8;
                    border-radius: 8px;
                    box-shadow: 0 0 5px rgba(0, 2, 5, 10);
                    margin-bottom: 20px;
                }
                .form input,
                .form textarea,
                .form select {
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    font-size: 16px
                }
                .form textarea {
                    min-height: 100px;
                    resize: vertical;
                }
                .form button {
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #4CAF50;
                    color: white;
                    border-radius: 4px;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                }
                .submissions {
                    wifth: 100%;
                    max-width: 500px;
                    margin-top: 20px;
                    text-align: left;
                }
                .submission-item {
                    background-color: #FBFDBB;
                    border-radius: 2px;
                    padding: 15px;
                    margin-bottom: 15px;
                    box-shadow: 0 0 2px rgba(20, 20, 20, 100);
                }

                `}
            </style>
        </div>
    );
}

export default Day3;