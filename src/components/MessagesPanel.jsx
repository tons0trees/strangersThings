import React from "react";

const MessagesPanel = ({messageList}) => {
    return (
        <div>
            <h4>Messages</h4>
            {
                messageList.map((elem) => {
                    return <p key={"message_"+elem._id}><b>{elem.fromUser.username + ':  '}</b>{elem.content}</p>
                })
            }
        </div>
    )
}

export default MessagesPanel