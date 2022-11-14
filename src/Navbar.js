import {Link} from "react-router-dom";

export const Navbar = () => {
    return <div>
        <Link to="/"> home</Link>
        <Link to="/create"> create</Link>
        <Link to="/bestTime"> best 5 </Link>
        <Link to="/allRidersTime"> All riders time </Link>
    </div>
}