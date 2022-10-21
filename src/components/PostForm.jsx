import React from 'react'
import { useNavigate } from 'react-router-dom';

const PostForm = ({userToken}) => {
    const navigate = useNavigate();

    async function submitNewPost (event) {
        event.preventDefault()
        const newPost = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                post: {
                    title: event.target[0].value,
                    description: event.target[1].value,
                    price: event.target[2].value,
                    location: event.target[3].value,
                    willDeliver: event.target[4].checked
                }
            })
      }
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts', newPost)
            const result = await response.json()
            navigate('/')
        } catch (error) {
            console.log('an error happened', error)
            
        }
        // handle what fetch comes back with
    }




    return (
        <form className="PostForm" onSubmit={submitNewPost}>
                <label htmlFor="title"><b>Title: </b><br/>
                    <input type="text" name="title"/>
                </label>
                <label htmlFor="description" ><b>Description: </b> <br/>
                <textarea rows="4" cols="50"></textarea>
                </label>
                <label htmlFor="price"><b>Price: </b> <br/> 
                    <input type="text" name="price"/>
                </label>
                <label htmlFor="location"><b>Location: </b> <br/>
                    <input type="text" name="location"/>
                </label>
                <label htmlFor="willDeliver"><b>Will Deliver: </b> <br/>
                    <input type="checkbox" name="willDeliver" value={true}/>
                </label>
                <input type="submit" value="Submit Post"/>
        </form>
    )
}



export default PostForm




