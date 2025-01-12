import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div className={s.homeSection}>
      <h2 className={s.title}>Trending today:</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
