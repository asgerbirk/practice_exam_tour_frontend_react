import {Link} from "react-router-dom";

export const Navbar = () => {
    return <div>
        <Link to="/"> home</Link>
        <Link to="/edit"> edit</Link>
        <Link to="/create"> create</Link>
        <Link to="/delete"> delete</Link>
    </div>
}