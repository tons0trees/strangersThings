import React, {useState} from 'react'
import {SinglePost} from './'




const SearchBar = ({postList, userToken, setPostList, setSearchInput}) => {




    // if (searchInput.length > 0) {
    //     postList.filter(post => {
    //         return post.title.match(searchInput);}); 
    


    return (
    
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
      </div>)



}


export default SearchBar
