import React, { useState, useEffect } from "react"
import {
    BrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
} from "react-router-dom"
import { Navbar, PostsDisplay, RegistrationForm, PostForm } from "./"
import { getPostList } from "../api"

const Main = () => {
    const [postList, setPostList] = useState([])
    const [userToken, setUserToken] = useState(null)
    const [readyToPost, setReadyToPost] = useState(false)

    useEffect(() => {
        const localToken = localStorage.getItem("token")
        setUserToken(localToken)
    }, [])

    useEffect(() => {
        async function callGetPostList() {
            const fetchedList = await getPostList(userToken)
            setPostList(fetchedList)
        }
        callGetPostList()
    }, [userToken])

    return (
        <BrowserRouter>
            <div id="main">
                <Navbar
                    userToken={userToken}
                    setUserToken={setUserToken}
                    setReadyToPost={setReadyToPost}
                    readyToPost={readyToPost}
                />
                <Routes>
                    <Route
                        path="/register"
                        element={
                            <RegistrationForm
                                setUserToken={setUserToken}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/"
                        element={
                            <PostsDisplay
                                postList={postList}
                                userToken={userToken}
                                setPostList={setPostList}
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Main
