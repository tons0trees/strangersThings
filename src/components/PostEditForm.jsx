import React, {useState} from "react";
import { useParams } from "react-router-dom";

const PostEditForm = ({userToken,postList}) => {
    const {postId} = useParams()
    const oldPost = postList.filter(elem => elem._id == postId)[0]

    const [currentPost, setCurrentPost] = useState(oldPost)

    function handleChange(event) {
        event.preventDefault()
        const changedKey = event.target.name
        const changedValue = (changedKey==='willDeliver' ? event.target.checked : event.target.value)
        const changedPost = {...currentPost, [changedKey]: changedValue}
        setCurrentPost(changedPost)
    }

    async function submitEditPost(event) {
        event.preventDefault();
        const editToken = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
                post: {
                    title: event.target[0].value,
                    description: event.target[1].value,
                    price: event.target[2].value,
                    location: event.target[3].value,
                    willDeliver: event.target[4].checked,
                },
            }),
        };
        try {
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts/"+post._id,
                editToken);
            const result = await response.json();
            navigate("/");
        } catch (error) {
            console.log("an error happened", error);
        }
    }

    return (
        <form className="PostEditForm" onChange={handleChange}>
            <label htmlFor="title">
                Title
                <input type="text" name="title" defaultValue={currentPost.title}/>
            </label>
            <label htmlFor="description">
                Description
                <input type="text" name="description" defaultValue={currentPost.description}/>
            </label>
            <label htmlFor="price">
                Price
                <input type="text" name="price" defaultValue={currentPost.price}/>
            </label>
            <label htmlFor="location">
                Location
                <input type="text" name="location" defaultValue={currentPost.location}/>
            </label>
            <label htmlFor="willDeliver">
                Will Deliver
                <input type="checkbox" name="willDeliver" checked={currentPost.willDeliver} />
            </label>
            <input type="submit" value="Submit Post" />
        </form>
    );
};
export default PostEditForm;
