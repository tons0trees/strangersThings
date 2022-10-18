import React, {useState, useEffect} from "react"
import {Navbar, PostsDisplay, RegistrationForm} from "./"

const Main = () => {
const [postList, setPostList] = useState([])
const [readyToRegister, setReadyToRegister] = useState(false)

async function getPostList() {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
    const posts = await response.json()
    // const posts2 = posts.data.posts
    setPostList(posts.data.posts)
}

useEffect (() => {
    getPostList()
}, [])



getPostList()

    return (
        <div id="main">
            <Navbar readyToRegister={readyToRegister} setReadyToRegister={setReadyToRegister}/>
            {readyToRegister ? <RegistrationForm /> : null}
            <PostsDisplay postList={postList} />
        </div>
    )
}

export default Main;