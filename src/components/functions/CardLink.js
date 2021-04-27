import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { API_URL } from "../constants/Api";
import Placeholder from "../../img/placeholder.png";


function CardLink({ id, name, img }) {

    let imageUrl = Placeholder;
  
    if (img && img.url) {
        imageUrl = API_URL + img.url;
    }


	return (
            <div className="card">
                <h3>{name}</h3>
                <img src={imageUrl} alt={name}></img>

                <Link className="btn" to={`detail/${id}`}>view More</Link>
            </div>
	);
}

CardLink.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
    img: PropTypes.object,
    description: PropTypes.string,
};

export default CardLink;
