import { Link, useHistory } from "react-router-dom";


function NavBar(){

    const history = useHistory();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;