import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios'
import "../App.css";
import { useAuth } from "../context/auth";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const [isError, setIsError] = useState(false);
    const { setAuthTokens } = useAuth();

    const login = () => {
        axios.post("http://localhost:4001/loggedin", {
            username: username,
            password: password,
        })
        .then((res) => {
        if (res.data.length > 0) {
            setAuthTokens(res.data);
            setLoginStatus(true);
            console.log("Logged In")
        } else {
            setLoginStatus(false);
            setIsError(true);
        }
        })
    };

    if (loginStatus) {
        return <Redirect to="/admin" />;
    }

    return (
        <div className="App">
        <div className="login">
            <h1>Login</h1>
            <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            />
            <input
            type="password"
            placeholder="Password..."
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            />
            <button onClick={login}> Login </button>
        </div>
        { isError &&<p> The username or password provided were incorrect!</p> }
        <h1>{loginStatus}</h1>
        </div>
    );
}