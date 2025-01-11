import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.card}>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
