import css from './App.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import Loader from '../Loader/Loader.jsx';
import { Image, ApiResponse, SelectedImage } from './App.types';

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );

  const onSearch = (userSearch: string | null): void => {
    setQuery(userSearch);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === null) return;
    async function fetchImages() {
      try {
        setError(null);
        setLoading(true);

        const response = await axios.get<ApiResponse>(
          `https://api.unsplash.com/search/photos?client_id=31vOygG6dJTDM4WYDN9lcflKaCM7oYZNQcHe6lBV_Co&page=${page}&per_page=12&query=${query}`
        );
        console.log(response);

        const fetchedImages = response.data.results;

        const totalPages = response.data.total_pages;

        setImages(prevImages => [...prevImages, ...fetchedImages]);
        setTotalPages(totalPages);
      } catch (error: any) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const loadMoreImages = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };
  useEffect(() => {
    if (page >= 1) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 500);
    }
  }, [images, page]);

  const openImageModal = (imageUrl: string, imageAlt: string): void => {
    setSelectedImage({ imageUrl, imageAlt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section>
      <div className={css.search}>
        <SearchBar onSearch={onSearch} />
      </div>

      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openImageModal} />
      )}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {loading && <Loader />}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeImageModal}
          imageUrl={selectedImage.imageUrl}
          imageAlt={selectedImage.imageAlt}
        />
      )}
    </section>
  );
};

export default App;
