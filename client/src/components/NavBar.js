import { Link, useHistory } from "react-router-dom";


function NavBar() {

    const history = useHistory();

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TobeyTown</a>
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
                </div>
            </div>
        </nav>
    );
}



export default NavBar;