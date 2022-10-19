import React, { useState, useEffect } from "react";
import { Navbar, PostsDisplay, RegistrationForm, PostForm } from "./";
import { getPostList } from "../api";

const Main = () => {
    const [postList, setPostList] = useState([]);
    const [readyToRegister, setReadyToRegister] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [readyToPost, setReadyToPost] = useState(false);

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        setUserToken(localToken);
    }, []);

    useEffect(() => {
        async function callGetPostList() {
            const fetchedList = await getPostList(userToken);
            setPostList(fetchedList);
        }
        callGetPostList();
    },[userToken])

    return (
        <div id="main">
            <Navbar
                userToken={userToken}
                setUserToken={setUserToken}
                readyToRegister={readyToRegister}
                setReadyToRegister={setReadyToRegister}
                setReadyToPost={setReadyToPost}
                readyToPost={readyToPost}
            />
            {readyToRegister ? (
                <RegistrationForm
                    setUserToken={setUserToken}
                    setReadyToRegister={setReadyToRegister}
                />
            ) : null}
            {readyToPost ? (
                <PostForm
                    userToken={userToken}
                    setReadyToPost={setReadyToPost}
                />
            ) : (
                <PostsDisplay postList={postList} />
            )}
        </div>
    );
};

export default Main;
