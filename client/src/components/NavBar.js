import { Link, useHistory } from "react-router-dom";


function NavBar(){

    const history = useHistory();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/biography">Biography</Link>
                </li>
                <li>
                    <Link to="/filmography">Filmography</Link>
                </li>
                <li>
                    <Link to="/leaveamessage">Leave A Message</Link>
                </li>
                
            </ul>
        </nav>
    );
}

export default NavBar;