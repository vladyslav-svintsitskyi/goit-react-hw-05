import { Link, useLocation } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.moveList}>
        {movies.map((item) => (
          <li key={item.id} className={s.moveItem}>
            <BsCaretRightFill />
            <Link to={`/movies/${item.id}`} state={location}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
