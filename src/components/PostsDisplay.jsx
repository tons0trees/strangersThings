import React, {useState} from "react"
import {SinglePost} from './'


const PostsDisplay = ({postList, userToken, setPostList}) => {
    const [filteredList, setFilteredList] = useState([])
    const [searchStr, setSearchStr] = useState('')

    function handleSearch(event) {
        event.preventDefault()
        const newList = postList.filter((post) => {
            return (post.title.toLowerCase().includes(searchStr) || post.description.toLowerCase().includes(searchStr))
        })
        setFilteredList(newList)
    }

    return (
        <div className="post-display">
            <form onSubmit={handleSearch}>
                <input type='text' id='search-posts' placeholder="Search" value={searchStr} onChange={event => setSearchStr(event.target.value.toLowerCase())}/>
            </form>
            {filteredList.length
            ?
                filteredList.map(elem => {
                    return <SinglePost key={elem._id} post={elem} userToken={userToken} setPostList={setPostList} searchStr={searchStr} filteredList={filteredList} setFilteredList={setFilteredList}/>
                })
            :
                postList.map(elem => {
                    return <SinglePost key={elem._id} post={elem} userToken={userToken} setPostList={setPostList}/>
            })}
        </div>
    )
}


export default PostsDisplay