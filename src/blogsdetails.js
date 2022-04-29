import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const {id}=useParams();
    const {data:blog, error,isPending}=useFetch('http://localhost:80/blogs/' +id);
    const nav=useNavigate();

    const handleevent=()=>{
        fetch('http://localhost:80/blogs/'+ blog.id, {
            method:'DELETE'
        }).then(()=>{
            nav('/');
        })
    }
    return (
        <div className="blogs-details">
            {isPending && <h4>Loading......</h4>}
            {error && <h3>Error</h3>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by-{blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleevent}>Delete</button>
                </article>

            )}
        </div>
    );
}
 
export default Blog;