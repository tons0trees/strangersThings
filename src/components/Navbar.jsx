import React, { useState } from "react";
import { logIn } from "../api";
import { NavLink } from "react-router-dom";

const Navbar = ({ userToken, setUserToken }) => {
    async function logIn(event) {
        event.preventDefault();
        try {
            const userToLogin = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: {
                        username: event.target[0].value,
                        password: event.target[1].value,
                    },
                }),
            };
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login",
                userToLogin
            );
            const result = await response.json();
            const token = result.data.token;
            setUserToken(token);
            localStorage.removeItem("token");
            localStorage.setItem("token", token);
        } catch (error) {
            console.log("there is an error", error);
        }
    }

    return (
        <div id="navbar">
            <h2>Stranger's Things</h2>
            {userToken ? (
                <div>
                    <NavLink className='nav-link' to="/post"><button>Make New Post</button></NavLink>
                    <button
                        onClick={() => {
                            setUserToken(null);
                            localStorage.removeItem("token");
                            setReadyToPost(false);
                        }}
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <>
                    <form id="login-form" onSubmit={logIn}>
                        <label htmlFor="username-input">
                            Username:
                            <input type="text" name="username-input" />
                        </label>
                        <label htmlFor="password-input">
                            Password:
                            <input type="text" name="password-input" />
                        </label>
                        <input type="submit" value="Log In" />
                    </form>
                    <NavLink className='nav-link' to="/register"><button>Sign Up</button></NavLink>
                </>
            )}
            <NavLink className='nav-link' to="/"><button>Home</button></NavLink>
        </div>
    );
};

export default Navbar;
