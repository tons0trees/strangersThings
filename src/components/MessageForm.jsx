import React from "react";
import { getPostList } from "../api";

const MessageForm = ({post, userToken, setPostList}) => {
    async function submitMessage(event) {
        event.preventDefault()
        const url = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts/' + post._id + '/messages'
        const messageToken = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                message: {
                    content: event.target[0].value
                }
            })
        }
        try {
            const response = await fetch(url,messageToken)
            const result = await response.json()
            event.target[0].value = '' //IS THIS VANILLA DOM MANIPULATION LEGAL?
            const newPostList = await getPostList(userToken)
            setPostList(newPostList)
        } catch (error) {
            console.log('An error occurred', error)
        }

    }

    return (
        <form className="message-form" onSubmit={submitMessage}> 
            <input type='text'/>
            <input type='submit' value='Send'/>
        </form>
    )
}

export default MessageForm