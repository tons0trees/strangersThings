import React, {useState} from "react"
import {SinglePost, SearchBar} from './'


const PostsDisplay = ({postList, userToken, setPostList}) => {
    const [searchInput, setSearchInput] = useState('')

    function filterPost(){
        if (searchInput) {
 
        
          return postList.filter((post)=>{
            console.log(searchInput)
            return postList.title.toLowerCase() === searchInput.toLowerCase()
          })
        }
      }
      filterPost()

      function handleChange (event) {
        event.preventDefault();
        setSearchInput(event.target.value);
        console.log(event.target.value)
    };
    // const [filteredList, setFilteredList] = useState([])

    // function handleSearch(event) {
    //     event.preventdefault()
    //     const searchStr = event.target[0].value.toLowerCase();
    //     console.log(searchStr)
    //     const newList = postList.filter((post) => {
    //         return post.title.toLowerCase().includes(searchStr)
    //     })
    //     setFilteredList(newList)
    // }

    return (
        <div className="post-display">
           
    
    <div id="searchBarContainer">
      <form
      id="SearchBar"
      onSubmit={handleChange}>
        <label>
            Search: 
            <input 
            type="search" 
            placeholder="Search for Items"
            />
        </label>
      </form>
      </div>
            {/* <form onSubmit={handleSearch}><input type='text' id='search-posts' placeholder="Search"/></form>
            {filteredList.length?<p>The FilteredList has stuff in it</p>:null} */}
            {postList.map(elem => {
                return <SinglePost key={elem._id} post={elem} userToken={userToken} setPostList={setPostList}/>
            })}
        </div>
    )
}


export default PostsDisplay