import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.details });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login bg-blue-800 w-full min-h-screen flex flex-col items-center justify-center space-y-2">
      <h1 className="lTitle text-3xl font-bold text-white">
        Booking App Login
      </h1>
      <div className="lContainer flex flex-col items-center justify-around bg-white px-5 py-4 rounded-md space-y-3 w-80">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => handleChange(e)}
          id="username"
          className="lInput border border-gray-400 rounded-sm text-lg p-2 w-full"
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          id="password"
          className="lInput border border-gray-400 rounded-sm text-lg p-2 w-full"
        />
        <button
          disabled={loading}
          onClick={(e) => handleClick(e)}
          className="lButton bg-blue-800 text-white text-lg rounded-md p-3 w-full"
        >
          Login
        </button>
        {error && (
          <span className="errMsg text-red-600 text-sm">{error.message}</span>
        )}
      </div>
    </div>
  );
}

export default Login;
