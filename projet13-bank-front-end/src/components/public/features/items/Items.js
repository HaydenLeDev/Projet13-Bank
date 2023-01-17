import PropTypes from 'prop-types'
import './Items.css'

function Items({ scrImage, alt, title, text }) {
    return (
        <div className="feature-item">
            <img src={scrImage} alt={alt} className="feature-icon"></img>
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}

Items.propTypes = {
    scrImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Items;
