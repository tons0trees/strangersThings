import React, { useState, useEffect } from "react"
import {
    BrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
} from "react-router-dom"
import { Navbar, PostsDisplay, RegistrationForm, PostForm, UserDashboard } from "./"
import { getPostList } from "../api"

const Main = () => {
    const [postList, setPostList] = useState([])
    const [userToken, setUserToken] = useState(null)

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
                        exact path="/"
                        element={
                            <PostsDisplay
                                postList={postList}
                                userToken={userToken}
                                setPostList={setPostList}
                            />
                        }
                    />
                    <Route
                        path="/post"
                        element={
                            <PostForm
                                userToken={userToken}
                            />
                        }
                    />
                    <Route 
                        path="/dashboard"
                        element={
                            <UserDashboard userToken={userToken} setPostList={setPostList}/>}
                            />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Main
