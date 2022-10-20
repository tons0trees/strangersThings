import React from "react";

const UserMessages = ({messages}) => {
    console.log(messages)
    return (
        <div>
            <h1>Kaylan's Messages</h1>
            {messages.map((message,index) => {
                return (
                <div key={`message_${index}`} className="individual-message">
                   <p><b>From: </b>{message.fromUser.username}</p> 
                   <p><b>{message.post.title}</b></p>
                   <p>{message.content}</p>
                </div>)
            })}
        </div>
    )
}

export default UserMessages