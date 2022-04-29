import { useEffect, useState } from "react";
import Blogslist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blog,isPending,error}=useFetch('http://localhost:80/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <p>Loading...........</p> }
            {blog && < Blogslist blog={blog} title="My-Blogs"/>}
        </div>
    );
}
 
export default Home;