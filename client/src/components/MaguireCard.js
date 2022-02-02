
   
import TobeyType from "./TobeyType";

function MaguireCard({ maguire }) {
    return (
        <div className="card">
            {maguire.imageUrl && <img src={maguire.imageUrl} className="card-img-top" alt={maguire.name}></img>}
            <div className="card-body">
                <h5 className="card-title">{maguire.name}</h5>
                <h6 className="card-subtitle">{maguire.description}</h6> 
                <h7 className="card-text">{maguire.tobeyType}</h7>
                {maguire.tobeytypes.map(t => (<TobeyType tobeyTypeId={t.tobeyTypeId} vibe={t.vibe} />))}
            </div>
        </div>
        //could add link to edit or delete here but idk for a fanpage
    );

}

export default MaguireCard;