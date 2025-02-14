import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from "../../utils/axiosInstance";
import LoginForm from './LoginForm';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginRole, setLoginRole] = useState("user");

  const navigate = useNavigate();

  const handleUserLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("please enter the passsword");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/user-login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken)
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occured. Please try again");
      }
    }
  }

  const handleManagerLogin = async (e) => {
    e.preventDefault();


    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("please enter the passsword");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/manager-login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken)
        navigate('/managerdash');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occured. Please try again");
      }
    }
  }

  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <div className=' shadow-md mb-2 rounded-md inline-block py-0.5'>
            <button
              onClick={() => setLoginRole("user")}
              className={`px-4 py-1 cursor-pointer rounded-md ${loginRole == 'user' && `border`} `}
            >User</button>
            <button
              onClick={() => setLoginRole("manager")}
              className={`px-4 py-1 cursor-pointer rounded-md ${loginRole == 'manager' && `border`} `}
            >Manager</button>
          </div>
          {loginRole == 'user' &&
            <LoginForm
              key="user"
              placeholder="User Email"
              handleSubmit={handleUserLogin}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password}
              email={email}
              error={error}
            />
          }
          {loginRole != "user" &&
            <LoginForm
              key="manager"
              placeholder="Manager Email"
              handleSubmit={handleManagerLogin}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password}
              email={email}
              error={error}
            />
          }
        </div>
      </div>
    </>

  )
}

export default Login