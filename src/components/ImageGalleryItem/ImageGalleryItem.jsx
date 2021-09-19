import '../style.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({id,tags,image,onClick}) => {
    
    return (
        <li key={id} className="ImageGalleryItem" >
            <img
                src={image}
                alt={tags}
                className="ImageGalleryItem-image"
                onClick={onClick}/>
        </li> )
            }
ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}