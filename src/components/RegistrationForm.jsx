import React from "react"


const RegistrationForm = ({setUserToken, setReadyToRegister}) => {

    async function registerNewUser (event){
        event.preventDefault();
        try {
            const newUser = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({user: {username: event.target[0].value, password: event.target[1].value}})
            }
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register', newUser)
            const result = await response.json()
            const token = result.data.token
            setUserToken(token)
            localStorage.removeItem('token')
            localStorage.setItem('token', token)
            setReadyToRegister(false)
        } catch (error) {
            console.log(error)           
        }
    }

    return (
        <div className="registration-form" onSubmit={registerNewUser}>
            <form>
                <label htmlFor="username">Username:
                    <input type="text" name="username"/>
                </label>
                <label htmlFor="password">Password:
                    <input type="password" name="password"/>
                </label> 
                <input type="submit" value="Submit"/>

            </form>

        </div>
    )

}
export default RegistrationForm