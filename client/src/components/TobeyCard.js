
   
import Tag from "./Tag";

function TobeyCard({ tobey }) {
    return (

        <div className="card text-black bg-primary mb-3">
            {tobey.imageUrl && <img src={tobey.imageUrl} className="card-img-top" alt={tobey.name}></img>}
            <div className="card-body">
                <h1 className="card-title">{tobey.name}</h1>
                {/* <h6 className="card-subtitle">{tobey.description}</h6>  */}
                <h7 className="card-text">{tobey.tag}</h7>
                {tobey.tags.map(t => (<Tag tagId={t.tagId} vibe={t.vibe} />))}
            </div>
        </div>
        //could add link to edit or delete here but idk for a fanpage
    );

}

export default TobeyCard;