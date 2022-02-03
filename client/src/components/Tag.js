import { Link, useHistory } from "react-router-dom";


function Tag({ tagId, vibe }) {

    const history = useHistory();

    function filterByTag() {
        // console.log("click!");
        history.push(`/tobey/${tagId}`);
        // <Link to="/courses?sort=name" />
    }

    return (

        
        // <Link to={`/tobey/${tagId}`}> {vibe} </Link>

        <button onClick={filterByTag}>
            {vibe}
            <Link to={`/tobey/${tagId}`} />
        </button>
        // <span className="badge badge-primary" onClick={func} >
        //     {vibe}
        //     <Link to={`/tobey/${tagId}`} />
        // </span>
    );

}



export default Tag;