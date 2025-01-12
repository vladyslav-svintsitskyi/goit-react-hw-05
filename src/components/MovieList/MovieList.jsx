import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={s.moveList}>
        {movies.map((item) => (
          <li key={item.id} className={s.moveItem}>
            <BsCaretRightFill />
            <Link to={`/movies/${item.id.toString()}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
