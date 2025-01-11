import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getImagesData = async () => {
      try {
        if (!query) return;

        setIsLoading(true);
        const { results, total_pages } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
        setError(null);
      } catch (error) {
        setError("True");
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    if (query === newQuery) return;
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSearchChanged={handleChangeQuery} />
      <main>
        {error && <ErrorMessage />}
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {!isLoading && page < totalPages && <LoadMoreBtn onClick={loadMore} />}
        {selectedImage && (
          <ImageModal
            isOpen={isModalOpen}
            image={selectedImage}
            onClose={closeModal}
          />
        )}
      </main>
    </div>
  );
}

export default App;
