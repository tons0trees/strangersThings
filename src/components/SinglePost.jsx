import React from "react";

const SinglePost = ({post}) => {
    return (
        <div className="single-post">
            <h3>{post.title}</h3>
            <p>{post.location}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.author.username}</p>
        </div>
    )
}

export default SinglePost