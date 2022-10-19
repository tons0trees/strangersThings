import React from "react"
import {SinglePost} from './'


const PostsDisplay = ({postList, userToken, setPostList}) => {
    return (
        <div>
            {postList.map(elem => {
                return <SinglePost key={elem._id} post={elem} userToken={userToken} setPostList={setPostList}/>
            })}
        </div>
    )
}


export default PostsDisplay