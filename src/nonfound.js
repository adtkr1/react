import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="nf">
            <h2>Page Doesn't Exist</h2>
            <Link to='/'>Back to Homepage</Link>
        </div>
    );
}
 
export default Notfound;