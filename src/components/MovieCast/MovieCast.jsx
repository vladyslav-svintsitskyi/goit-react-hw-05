import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastByUserId } from "../../services/api";
import s from "./MovieCast.module.css";
import { BsCaretRight } from "react-icons/bs";

const MovieCast = () => {
  const { movieId } = useParams();

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const credits = await fetchCastByUserId(movieId);
      setCredits(credits);
    };
    getData();
  }, [movieId]);

  return (
    <div className={s.castInfo}>
      <ul className={s.castList}>
        {credits.map((item) => (
          <li key={item.id} className={s.castItem}>
            <BsCaretRight />
            <div className={s.castInfoWrap}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt={item.name}
              />
              <p className={s.castItemInfo}>{item.name}</p>
              <p className={s.castItemInfo}>{item.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
