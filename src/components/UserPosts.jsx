import React from "react";
import {SinglePost} from './'

const UserPosts = ({posts, setPostList, userToken}) => {
const activePosts = posts.filter(element => element.active)

    return (

        <div>
            <h1>Posts</h1>
            {activePosts.map((post, index) => {
                post.isAuthor = true
                post.messages = []
                return (
                    <SinglePost key={`post${index}`} post={post} setPostList={setPostList} userToken={userToken}/>
                )

            })}


        </div>
    )
}

export default UserPosts