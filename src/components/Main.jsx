import React, {useState, useEffect} from "react"
import {Navbar, PostsDisplay, RegistrationForm, PostForm} from "./"

const Main = () => {
const [postList, setPostList] = useState([])
const [readyToRegister, setReadyToRegister] = useState(false)
const [userToken, setUserToken] = useState(null)
const [readyToPost, setReadyToPost] = useState(false)

async function getPostList() {
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
        const posts = await response.json()
  
        setPostList(posts.data.posts)
        
    } catch (error) {
        
    }
}

useEffect (() => {
    getPostList()
    const checkForToken = localStorage.getItem('token')
    setUserToken(checkForToken)
}, [])



getPostList()

    return (
        <div id="main">
            <Navbar userToken={userToken} setUserToken={setUserToken} readyToRegister={readyToRegister} setReadyToRegister={setReadyToRegister} setReadyToPost={setReadyToPost}/>
            {readyToRegister ? <RegistrationForm setUserToken={setUserToken} setReadyToRegister={setReadyToRegister}/> : null}
            {readyToPost ? <PostForm userToken={userToken} setReadyToPost={setReadyToPost}/> :
            <PostsDisplay postList={postList} />}
        </div>
    )
}

export default Main;