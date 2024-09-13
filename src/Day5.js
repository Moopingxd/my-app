import { useState } from "react";
const SampleList = () => {
    const fruits = ['Banana', 'Melon', 'Coconut', 'Apple', 'Mango'];
    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {
                    fruits.map((fruits, index) => (
                        <li key={index}>{fruits}</li>
                    ))
                }
            </ul>
        </div>
    )
};
const ASEANCountries = () => {
    const countries = [
        'Laos',
        'Thailand',
        'Vietnam',
        'Cambodia',
        'Myanmar',
        'Indonasia',
        'Brunei',
        'Singapore',
        'Malaysia',
        'Phillipines'
    ];
    return (
        <div>
            <h2>
                ASEAN Countries
            </h2>
            <ul>
                {
                    countries.map((countries, index) => (
                        <li key={index}>{index + 1}. {countries}</li>
                    ))
                }
            </ul>
        </div>
    )
};
const Student = () => {
    const students = [
        {
            name: "Mooping",
            class: "A1",
            gender: "Male"
        },
        {
            name: "Hannah",
            class: "A1",
            gender: "Female"
        },
        {
            name: "Tiya",
            class: "A1",
            gender: "Female"
        },
        {
            name: "Jorin",
            class: "C1",
            gender: "Female",
        },
        {
            name: "Taaom",
            class: "C1",
            gender: "Female",
        }
    ]
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students
                    .filter(
                        (student) => student.class === "A1" && student.gender === "Female")
                    .map((students, index) => (
                        <li key={index}>
                            {index + 1}. {students.name}, class: {students.class}, Gender: {students.gender}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            text: "Study React",
            complete: false,
        },
        {
            text: "To-do app",
            complete: false,
        },
        {
            text: "List & Keys",
            complete: true,
        },
    ])
    const [newTodo, setNewTodo] = useState('');

    const onToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].complete = !newTodos[index].completed;
        setTodos(newTodos)

    }
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    }
    return (
        <div>
            <h2>To-do List</h2>
            <form onSubmit={addTodo}>
                <input onChange={(event) => setNewTodo(event.target.value)} value={newTodo} type="text" placeholder="Add new item..."></input>
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    todos.map((todos, index) => (
                        <li
                            onClick={() => onToggleTodo(index)}
                            key={index} style={{ textDecoration: todos.complete ? "line-through" : "none" }}>
                            {todos.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

const ImageCarousel = ({ Images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
    }
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + Images.length) % Images.length
        );
    };
    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
            {Images.map((image, index) =>(
                <img 
                    src={image}
                    key={index}
                    alt={`Slide ${index +1}`}
                    className={`carousel-image ${index === currentIndex ? "active":""}`}
                ></img>
            ))}
            <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}
const Day5 = () => {
    const carouselImages = [
   "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/429567937_1604149943494359_6238993981974178507_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=KxLN9qqE_t0Q7kNvgHH4Trx&_nc_ht=scontent.fvte2-1.fna&oh=00_AYBuHkSXfK8706MNHE1tS0UzO0M32aqfV8lGuvsPzMrpjA&oe=66E0AAC6",
   "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/429578879_1603831783526175_3019744304855677907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=lbofOexdPKYQ7kNvgHC9ZVt&_nc_ht=scontent.fvte2-1.fna&oh=00_AYCjT2d6882pC4HcbkGpX2rgnBgZsZ_BT4bCmhsL5cnNjQ&oe=66E0BAD9",
   "https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/429562452_1604146200161400_1069910336854675966_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=R-DGwLgFzZgQ7kNvgGXBKP8&_nc_ht=scontent.fvte2-2.fna&oh=00_AYATQOQZKEfPrVz8zsgGPEftA1qD5afJ5N6UaGdzy-Z-wg&oe=66E094AA",
   "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/429580570_1604153626827324_2133291111331508788_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=KTPhqMd6gMEQ7kNvgE-dNYi&_nc_ht=scontent.fvte2-1.fna&oh=00_AYB4m_g5_mJmv-TwBthyN7wQoouB8prHrj0kMZJPF5ujow&oe=66E09DAE",
   "https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/429567730_1604153920160628_6953379560009796188_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=U3hkZi6F_cMQ7kNvgHk4n8m&_nc_ht=scontent.fvte2-2.fna&oh=00_AYCrv8KS5otWvk9gT6X-GnCvxnbTX1R3Ywlnxa6WJ4Xqeg&oe=66E0B4B5",
   "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/429586472_1603831933526160_7243285580187890336_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=SHJctFRaHQUQ7kNvgF7XjxI&_nc_ht=scontent.fvte2-1.fna&oh=00_AYAJgTA9SE_PkgQicJf4YFsoJV_Jdj3ctpkzQzdHx6cv-A&oe=66E08913"
    ]
    return (
        <div className="container">
            <h2>List and Keys with React Lesson</h2>
            <hr></hr>
            <SampleList></SampleList>
            <hr></hr>
            <ASEANCountries></ASEANCountries>
            <hr></hr>
            <Student></Student>
            <hr></hr>
            <TodoList></TodoList>
            <hr></hr>
            <ImageCarousel Images={carouselImages}></ImageCarousel>
            <style jsx>
                {`
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    min-height: 100vh;
                    background-color white;
                    text-align: start;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: #f0f0f0;
                    border-radius: 5px;
                }
                hr {
                    color: black;
                    width: 100%;
                }
                button {
                    margin-left: 10px;
                    cursor: pointer;
                    padding: 5px 10px;
                    background-color: #ff4444;
                    color: white;
                    border: none;
                    border-radius;x
                }
                .carousel {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    margin: 0px auto;
                }
                .carousel-image{
                    width:100%;
                    height: auto;
                    display: none;
                }
                .carousel-image.active{
                    display: block;
                }
                .carousel-button{
                    position: absolute;
                    top:50%;
                    transform: translateY(-50);
                    background-color: rgba{0, 0, 0, 5};
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    cursor: pointer;
                    font-size: 18px;
                }
                .prev {
                    left: 10px;
                }
                .next {
                    right: 10px;
                }
                `}
            </style>
        </div>
    );
}

export default Day5;