import React from 'react'



const UserData = ({userToken}) => {


    async function getUserData () {
        const userDataToken = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }
        }

        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/me', userDataToken)
            const result = await response.json()

            

            
        } catch (error) {
            console.log("There was an error", error)
            
        }
        
    }


    return (
    <div>
        <h2>User Dashboard</h2>
        <h3>Messages</h3>
        <div></div>
        <p></p>
        <h3>Posts</h3>

    </div>
        )

}


export default UserData