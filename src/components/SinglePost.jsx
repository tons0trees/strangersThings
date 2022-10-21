import React from "react";
import {getPostList} from '../api'
import {MessageForm, MessagesPanel} from "./";


const SinglePost = ({post, userToken, setPostList}) => {

    async function deletePost () {


        try {
         const deleteToken = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }

         }  
         const url = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts/' + post._id
         console.log(url)

         const response = await fetch(url, deleteToken)
         const result = await response.json()
         console.log(result)
         const newList = await getPostList(userToken)
         setPostList(newList)  
        } catch (error) {
          console.log("an error occurred", error)  
        }

    }


    return (
        <div className={post.isAuthor ? "single-post author" : "single-post"}>
            <h3>{post.title}</h3>
            <p><b>Location: </b>{post.location}</p>
            <p><b>Price: </b>{post.price}</p>
            <p><b>Description: </b>{post.description}</p>
            <div>
                {post.willDeliver ? (<p><b>Will Deliver</b></p>) : (<p><b>No Delivery</b></p>)}
            </div>

            <p><b>Username: </b>{post.author.username}</p>
            {userToken
            ? <>{post.isAuthor 
                ? <>
                    <button onClick={deletePost}>Delete</button>
                    <button>Edit</button>
                    {post.messages.length > 0 ? <MessagesPanel messageList={post.messages}/> : null}
                </>
                :<MessageForm post={post} userToken={userToken} setPostList={setPostList}/>}</>
            : null}
        </div>
    )
}

export default SinglePost