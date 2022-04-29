import { Link } from "react-router-dom";

const Blogslist = ({blog,title}) => {
    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {blog.map((events)=>(
                <div className="blog-prev" key={events.id}>
                    <Link to={`blogs/${events.id}`}>
                    <h2>{events.title}</h2>
                    <p>{events.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Blogslist;