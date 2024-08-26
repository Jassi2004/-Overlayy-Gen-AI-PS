import React, { useState } from "react";
import "./TryOutPage.css";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TryOutPage = () => {
  const [url, setUrl] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [responseReceived, setResponseReceived] = useState(false);
  const navigate = useNavigate(); // Hook to navigate

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async () => {
    if (url.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/crawl", { url });
      console.log("Response from server:", response.data);
      setIsButtonDisabled(false);
      setResponseReceived(true);
    } catch (error) {
      console.error("Error during the POST request:", error);
      alert("There was an error processing your request.");
    }
  };

  const handleCheckResult = () => {
    navigate("/result"); // Navigate to the Result page
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">HackinTech</div>
        <nav className="navbar-links">
          <a href="#resources">Resources</a>
          <a href="#overview">Overview</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="navbar-login">
          <button>Login/Signup</button>
        </div>
      </div>

      <main className="main-content2">
        <div className="text-content">
          <h3>
            <i className="fa-solid fa-eye"></i>A.I. Never Seen Before
          </h3>
          <h2>HackinTech.AI</h2>
          <p>"Unlock Insights, One Link at a Time!"</p>
        </div>

        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter your URL (https://hackintech.com)"
          />
          <button className="search-button" onClick={handleSubmit}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {responseReceived && (
          <p style={{ color: "red", marginTop: "20px" }}>
            Please make sure to run the Python script in the backend before moving further.
          </p>
        )}

        <button
          className="check-result-button"
          disabled={isButtonDisabled}
          onClick={handleCheckResult}
          style={{ marginTop: "10px" }}
        >
          Check Result
        </button>
      </main>
    </>
  );
};

export default TryOutPage;
