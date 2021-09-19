import '../style.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from 'prop-types';
  
export default function ImageGallery({ image, onSelect }) {
    return (<ul className="ImageGallery">
        {image.map(({ id, webformatURL, tags, largeImageURL }) =>
            <ImageGalleryItem
                id={id}
                tags={tags}
                image={webformatURL}
                largeImageURL={largeImageURL} 
                onClick={() => onSelect({ largeImageURL, tags } )}/>
        )}
        </ul>)
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      image: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
  onSelect: PropTypes.func.isRequired,
}