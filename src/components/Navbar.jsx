import React, {useState} from 'react'
import { logIn } from '../api';

const Navbar = ({userToken, setUserToken, setReadyToRegister, readyToRegister, setReadyToPost, readyToPost}) => {


    async function logIn(event) {
        event.preventDefault();
        try {
            const userToLogin = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    user: {username: event.target[0].value, password: event.target[1].value}
                })
            }
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login',userToLogin)
            const result = await response.json()
            const token = result.data.token
            setUserToken(token);
            localStorage.removeItem('token')
            localStorage.setItem('token', token)
        } catch (error) {
            console.log('there is an error', error)
        }
    }

    async function handleSubmit(event) {
        const username = event.target[0].value
        const password = event.target[1].value
        const token = logIn
    }

    return (
        <div id='navbar'>
            <h2>Stranger's Things</h2>
            {userToken
            ? <div>
                <button onClick={() => {setReadyToPost(!readyToPost)}} >Make New Post
                </button>
                <button onClick={() => {
                setUserToken(null);
                localStorage.removeItem('token');
            }}>Log Out</button>
            </div>
            :<><form id="login-form" onSubmit={logIn}>
                <label htmlFor='username-input'>
                    Username: 
                    <input type='text' name='username-input'/>
                </label>
                <label htmlFor='password-input'>
                    Password: 
                    <input type='text' name='password-input'/>
                </label>
                <input type="submit" value="Log In"/>
            </form>
            <button onClick={() => setReadyToRegister(!readyToRegister)}>Sign Up</button></>
            }
        </div>
    );
};

export default Navbar