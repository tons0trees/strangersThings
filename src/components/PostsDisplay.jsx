import React from "react"
import SinglePost from './SinglePost'


const PostsDisplay = ({postList}) => {
    return (
        <div>
            {postList.map(elem => {
                return <SinglePost key={elem._id} post={elem} />
            })}
        </div>
    )
}


export default PostsDisplay