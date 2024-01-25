import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Routing/Navbar";
import { useHistory } from 'react-router-dom';
import "./login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:9098/app/signin', { username, password });
      const token = response.data.jwt; // Assuming the token is returned in the response data

      // Save the token to local storage or any other storage mechanism
      localStorage.setItem('token', token);

      // Set the default Authorization header for subsequent requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsOpen(true);
      <Navbar />
      // Redirect to the new page using React Router's history
      history.push('/newpage');
    } catch (error) {
      setIsClose(true);

      setErrorMessage('Invalid username or password');
    }
  };

  return (
    
    <div >
      <nav class="navbar navbar-expand-lg bg-dark ">
              <div class="container-fluid">
            
                <a class="navbar-brand text-danger fs-3" href="#">
                  TekGain
                </a>
              </div>
              </nav>
              <div class="form-container">
      <input
        type="text"
        class="form-input"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <br />
      <input
        type="password"
        class="form-input"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <br />

      <button class="btn btn-danger m-2" onClick={handleLogin}>Login</button>
      {isOpen && <Navbar />}

      {/* <p>Your token: {token}</p> */}
      {isClose && <div className="error" style={{ color: "#ff0000" }}>Invalid user</div>}

      </div>
    </div>

  );
};

export default LoginForm;
