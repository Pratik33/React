import axios from "axios"
import { useEffect, useState } from "react";

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);
    const [ isButtonClicked , setIsButtonClicked ] = useState(false)
    let postSection;
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
            resp => resp.data)
            .then(posts => setPost(posts))
            .catch(error => console.error(error))
    }, [isButtonClicked])

    if (post) {
        postSection = (<section>
            <p> <strong>Title : </strong>{post.title} </p>
        </section>);
    }
    return (
        <div>
            <input type='text' value={postId} onChange ={ e => setPostId(e.target.value)}/>
            <button onClick={() => setIsButtonClicked(!isButtonClicked)}>Fetch Post</button>
            <p>Posts : </p>
            {postSection}
        </div>
    )
}
export default DataFetching;