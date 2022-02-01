
   
import { Link } from "react-router-dom";


function MaguireCard({ maguire }) {
//do we need to add vibe in here
    return (
        <div className="card">
            {maguire.imageUrl && <img src={maguire.imageUrl} className="card-img-top" alt={maguire.name}></img>}
            <div className="card-body">
                <h5 className="card-title">{maguire.name}</h5>
                <h6 className="card-subtitle">{maguire.description}</h6> 
                <h7 className="card-text">{maguire.tobeyTypes}</h7>
            </div>
        </div>
        //could add link to edit or delete here but idk for a fanpage
    );

}

export default MaguireCard;