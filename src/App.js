import { useEffect, useState } from "react";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";
import Day8 from "./Day8";
import Day9 from "./Day9";
import Day10 from "./Day10";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Main Component
const App = () => {
  const navigate = useNavigate();
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentDay, setCurrentDay] = useState(9);

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/authentication");
    }
  }, [])

  const handleDayClick = (day) => {
    setCurrentDay(day);
  };
  const handleprofile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
          Swal.fire({
              title: "Your're not Login,",
              icon: "warning",
              text: "Please Login to do this action"
          })
          return;   
  } else {
    navigate("/profile");
  }
}
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
  const DayContent = ({ day }) => {
    switch (day) {
      case 2:
        return <Day2></Day2>;
      case 3:
        return <Day3></Day3>;
      case 4:
        return <Day4></Day4>;
      case 5:
        return <Day5></Day5>;
      case 6:
        return <Day6></Day6>;
      case 7:
        return <Day7></Day7>;
      case 8:
        return <Day8></Day8>;
      case 9:
        return <Day9></Day9>;
      case 10:
        return <Day10></Day10>;
      default:
        return null;
    }
  }
  return (
    <div className="app">
      {days.map((day) => (
        <button
          onClick={() => {
            handleDayClick(day);
          }}
          className={currentDay == day ? "active-btn" : "inactive-btn"}
        >
          Day {day}</button>
      ))}
      <DayContent day={currentDay}></DayContent>
      <button className="logout"
        onClick={async () => {
          await handleLogout();
        }}
      >Log out</button>
      <button className="profile"
        onClick={async()=>{handleprofile()}}>Profile</button>
      <style jsx>
        {`
          .app {
           max-wifth: 600px;
           margin: 0 auto;
           padding: 20px;
           text-align:center;
           }
          button {
           padding: 7px 15px;
           margin-right: 10px;
           front-size: 16px;
          
           color: white;
           border: none;
           border-radius: 5px;
           cursor: pointer;
           transition: background-color 0.3s;
          }
          .active-btn {
          background-color: green;

          }
          .inactive-btn {
          background-color: gray;
          }
          .logout {
          background-color: red;
          color: white;
          }
          .profile {
          background-color: #87FCF6;
          color: black;
          }
    `}

      </style>
    </div>
  );
};

export default App;