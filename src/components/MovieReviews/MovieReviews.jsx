import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByUserId } from "../../services/api";
import s from "./MovieReviews.module.css";
import { BsCardText, BsCaretRight } from "react-icons/bs";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const reviews = await fetchReviewsByUserId(movieId);
      setReviews(reviews);
    };
    getData();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className={s.nothingText}>Nothing here yet...</p>;
  }

  return (
    <div className={s.reviewsInfo}>
      <ul className={s.reviewsList}>
        {reviews.map((item) => (
          <li key={item.id} className={s.reviewsItem}>
            <div>
              <BsCardText />
            </div>
            <div className={s.reviewsItemWrap}>
              <h3 className={s.reviewsItemAuthor}>Author: {item.author}</h3>
              <p className={s.reviewsItemText}>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
