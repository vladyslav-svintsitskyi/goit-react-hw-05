import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
