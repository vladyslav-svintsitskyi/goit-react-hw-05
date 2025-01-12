import React, { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMovieByID } from "../../services/api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const movie = await fetchMovieByID(movieId);
        if (!movie) throw new Error("Movie not found");
        setMovie(movie);
      } catch (error) {
        setError(`Ooops... ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  if (isLoading) {
    return (
      <div className={s.loading}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={s.movie}>
      <button
        className={s.goBackButton}
        onClick={() => navigate(backLink.current)}
      >
        Go back
      </button>
      <div className={s.movieDetails}>
        <img src={image_url} alt={movie.title} className={s.movieImage} />
        <div className={s.movieInfo}>
          <h2 className={s.movieTitle}>
            {movie.title} ({movie.release_date?.split("-")[0] || "N/A"})
          </h2>
          <p className={s.movieScore}>User score: {movie.vote_average}</p>
          <h3 className={s.movieSectionTitle}>Overview</h3>
          <p className={s.movieOverview}>{movie.overview}</p>
          <h3 className={s.movieSectionTitle}>Genres</h3>
          <p className={s.movieGenres}>
            {movie.genres?.map((item) => item.name).join(", ")}
          </p>
        </div>
      </div>

      <div>
        <div className={s.separationLine}></div>
        <h3 className={s.additionalTitle}>Additional information</h3>
        <ul className={s.list}>
          <li>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
