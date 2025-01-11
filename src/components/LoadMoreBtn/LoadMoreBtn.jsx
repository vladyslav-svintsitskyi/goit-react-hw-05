import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.loadBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
