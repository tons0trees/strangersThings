import React from "react";

const SinglePost = ({post}) => {
    return (
        <div className={post.isAuthor ? "single-post author" : "single-post"}>
            <h3>{post.title}</h3>
            <p>{post.location}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.author.username}</p>
            {post.isAuthor
            ? <>
            <button>Delete</button>
            <button>Edit</button>
            </>
            :null}
        </div>
    )
}

export default SinglePost