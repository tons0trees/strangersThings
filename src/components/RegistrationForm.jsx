import React from "react"


const RegistrationForm = () => {

    async function registerNewUser (){
        try {
            
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register')
            
        } catch (error) {
            console.log(error)
            
        }
    }







    return (
        <div className="registration-form">
            <form>
                <label htmlFor="username">Username:
                    <input type="text" name="username"/>
                </label>
                <label htmlFor="password">Password:
                    <input type="text" name="password"/>
                </label> 
                <label htmlFor="password-confirm">Confirm Password:
                    <input type="text" name="password-confirm"/>
                </label> 
                <input type="submit" value="Submit"/>

            </form>

        </div>
    )

}
export default RegistrationForm