import React from "react";
import {getPostList} from '../api'
import {MessageForm, MessagesPanel} from "./";
import { NavLink } from "react-router-dom";
import PostEditForm from "./PostEditForm";


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
            <p><b>Seller: </b>{post.author.username}</p>
            <p><b>Location: </b>{post.location}</p>
            <p><b>Price: </b>{post.price}</p>
            <p>{post.description}</p>
            <p><b>{post.willDeliver ? "Will Deliver" : "No Delivery"}</b></p>
            {userToken
            ? <>{post.isAuthor 
                ? <>
                    <button onClick={deletePost}>Delete</button>
                    <NavLink to={`/edit/${post._id}`}><button>Edit</button></NavLink>
                    {post.messages.length > 0 ? <MessagesPanel messageList={post.messages}/> : null}
                </>
                :<MessageForm post={post} userToken={userToken} setPostList={setPostList}/>}</>
            : null}
        </div>
    )
}

export default SinglePost