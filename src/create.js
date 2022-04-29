import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,settitle]=useState('');
    const [author,setauthor]=useState('mario');
    const [body,setbody]=useState('');
    const [pending,setpending]=useState(false);
    const history=useNavigate();

    const handlesubmit =(e)=>{
        e.preventDefault();
        const blog={title,author,body};
        setpending(true);
        fetch('http://localhost:80/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('Added');
            setpending(false);
            history('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handlesubmit}>

                <label htmlFor="">Blog Title:</label>
                <input type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                required/>

                <label htmlFor="">Blog Body:</label>
                <textarea required 
                value={body}
                onChange={(e) => setbody(e.target.value)}
                ></textarea>

                <label htmlFor="">Blog Author:</label>
                <select
                value={title}
                onChange={(e) => setauthor(e.target.value)}>

                    <option value="mario">Mario</option>
                    <option value="Aditya">Aditya</option>

                </select>

                { !pending && <button>Add Blog</button>}
                { pending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;