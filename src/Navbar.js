import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Aditya Blog</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{color:"Black",borderRadius:"10px"}}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;