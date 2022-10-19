import React from "react";
import {getPostList} from '../api'

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
            <p>{post.location}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.author.username}</p>
            {post.isAuthor
            ? <>
            <button onClick={deletePost}>Delete</button>
            <button>Edit</button>
            </>
            :null}
        </div>
    )
}

export default SinglePost