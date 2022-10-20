import React, {useState} from "react"
import {SinglePost} from './'


const PostsDisplay = ({postList, userToken, setPostList}) => {
    const [filteredList, setFilteredList] = useState([])

    function handleSearch(event) {
        event.preventdefault()
        const searchStr = event.target[0].value.toLowerCase();
        console.log(searchStr)
        const newList = postList.filter((post) => {
            return post.title.toLowerCase().includes(searchStr)
        })
        setFilteredList(newList)
    }

    return (
        <div className="post-display">
            <form onSubmit={handleSearch}><input type='text' id='search-posts' placeholder="Search"/></form>
            {filteredList.length?<p>The FilteredList has stuff in it</p>:null}
            {postList.map(elem => {
                return <SinglePost key={elem._id} post={elem} userToken={userToken} setPostList={setPostList}/>
            })}
        </div>
    )
}


export default PostsDisplay