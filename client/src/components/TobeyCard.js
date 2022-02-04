import { useContext } from "react";
import { Link} from "react-router-dom";
import Tag from "./Tag";
import EditContext from "../contexts/EditContext";

function TobeyCard({ tobey }) {

    const context = useContext(EditContext);

    return (

        <div className="card text-black bg-primary mb-3">
            {tobey.imageUrl && <img src={tobey.imageUrl} className="card-img-top" alt={tobey.name}></img>}
            <div className="card-body">
                <h1 className="card-title">{tobey.name}</h1>
                {/* <h6 className="card-subtitle">{tobey.description}</h6>  */}
                <h6 className="card-text">{tobey.tag}</h6>
                {tobey.tags.map(t => (<Tag tagId={t.tagId} vibe={t.vibe} />))}
            </div>
            {context.editing && <div className="card-footer text-center">
                <Link to={`/edit/${tobey.tobeyId}`} className="btn btn-info me-2">Edit</Link>
                <Link to={`/delete/${tobey.tobeyId}`} className="btn btn-danger">Delete</Link>
            </div>}
        </div>
    );

}

export default TobeyCard;