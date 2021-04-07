import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardLink({ id, name, img, description }) {
	return (
    
            <div className="card">
                <h3>{name}</h3>
                <img src={img.url} alt={name}></img>
                <p>{description}</p>
                <Link className="btn" to={`detail/${id}`}>view More</Link>
            </div>
 
	);
}

CardLink.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
    description: PropTypes.string,
};

export default CardLink;
