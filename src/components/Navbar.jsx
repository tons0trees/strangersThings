import React, {useState} from 'react'

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function logIn(event) {
        event.preventDefault();
    }

    return (
        <div id='navbar'>
            <h2>Stranger's Things</h2>
            <form id="login-form" onSubmit={logIn}>
                <label htmlFor='username-input'>
                    Username:
                    <input type='text' name='username-input' value={username} onChange={event => {
                        setUsername(event.target.value);
                        //this runs every time a letter is typed it would be better if it only ran once
                    }}/>
                </label>
                <label htmlFor='password-input'>
                    Password
                    <input type='text' name='password-input' value={password} onChange={event => {
                        setPassword(event.target.value);
                        //this runs every time a letter is typed it would be better if it only ran once
                    }}/>
                </label>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    );
};

export default Navbar