import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Admin from "./admin";

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        axios
            .get('http://localhost:4001/loggedin', {
        })
            .then(res => {
            setLoggedIn(true);
            postLogin();
            console.log(res.data)
            })
            .catch(error => console.error(`There was an error logging in`))
    }

    const postLogin = () => {
        axios
            .post('http://localhost:4001/loggedin', {
        })
    }

    if (loggedIn) {
        return <Redirect to="/admin" />;
    }

    return (
        <main>
            <div>
                <card>
                    <input type="username"
                    value={username}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="username"
                    />
                    <input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                    />
                    <button onClick={handleLogin}>Sign In</button>
                </card>
            </div>
        </main>
    )
}
export default Login