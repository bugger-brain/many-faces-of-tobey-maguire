import { Link, useHistory } from "react-router-dom";


function Tag({ tagId, vibe }) {

    const history = useHistory();

    function filterByTag() {
        history.push(`/tobey/${tagId}`);
    }

    return (

        

        // <button onClick={filterByTag}>
        //     {vibe}
        //     <Link to={`/tobey/${tagId}`} />
        // </button>
        <span className="badge badge-pill badge-light" onClick={filterByTag} >
            {vibe}
        </span>
    );

}



export default Tag;