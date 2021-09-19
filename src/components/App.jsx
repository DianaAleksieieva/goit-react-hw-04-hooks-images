import './style.css';
import React, { useState, useEffect  } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import imagesAPI from '../services/images-api';
import { scroll } from '../services/scroll';
import { Button } from './Button/Button';
import Loader from "react-loader-spinner";


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App(props) {
  const [query, setQuery] = useState('');
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [selectedImg, setSelectedImg] = useState(null);
  
  
  useEffect(() => {
    if (query !== '') {
      setStatus(Status.RESOLVED)
      imagesAPI.fetchImages(query, page)
        .then(images => setImage(prevImages => [...prevImages, ...images.hits]))
    }

  }, [query, page])
scroll()

    const loadNextPage = () => {
      setPage(prevPage => (prevPage + 1))
    };

    const newQuery = query => {
    setQuery(query)
    setPage(1)
    if (image !== []) {
      setImage([]);
    }
    };

  const handleSelectedImg = (selectedImg) => {
      setSelectedImg( selectedImg);
    };
   const closeModal = ()=> {
      setSelectedImg(null);
    };
    
    return (<div> <Searchbar query={query} onSubmit={newQuery} />
      {status === Status.IDLE && <div className="Message">Введите запрос в поиск.</div>}
      {status === Status.PENDING && <div className="Wrapper">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} margin-top={150} />
        <ImageGallery image={image} onSelect={handleSelectedImg}> </ImageGallery>
      </div>}
      
      {status === Status.RESOLVED && <div>
        <ImageGallery image={image} onSelect={handleSelectedImg} />
        {image.length !== 0 && <Button onClick={loadNextPage} />}
      {image === []   &&
        <div className="Message">Не удалось найти изображений по даному запросу</div>}
      </div>}
     
      {selectedImg && (
        <Modal
          srcImg={selectedImg.largeImageURL}
          altImg={selectedImg.tags}
          onClose={closeModal}
        />)}
    </div>)
  }
