import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import EditContext from "../contexts/EditContext";


function NavBar() {

    const context = useContext(EditContext);
    const history = useHistory();

    const stopEditing = () => {
        context.setEditing(false);
        history.push("/");
    };

    const startEditing = () => {
        context.setEditing(true);
        history.push("/");
    };


    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">TobeyTown</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/biography">Biography</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/filmography">Filmography</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/leaveamessage">Leave A Message</a>
                        </li>
                    </ul>
                    <div className="col align-self-center text-end">
                        {context.editing ? <>
                            <button className="btn btn-dark me-2" onClick={stopEditing}>View Mode</button>
                            <Link to="/add" className="btn btn-primary">Post a Tobey</Link>
                        </> : <button className="btn btn-dark me-2" onClick={startEditing}>Edit Mode</button>}
                    </div>
                </div>

            </div>
        </nav>
    );
}



export default NavBar;