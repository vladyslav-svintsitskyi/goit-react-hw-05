import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMoviesByTitle } from "../../services/api";
import { Field, Form, Formik } from "formik";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    query: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const query = values.query.trim();

      if (!query) {
        toast.error("Please enter a valid query.");
        return;
      }

      setSearchParams({ query });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const getData = await fetchMoviesByTitle(query);

        if (getData.length === 0) {
          toast.error("No movies found. Try another query.");
        }
        setMovies(getData);
      } catch (error) {
        toast.error("Failed to fetch movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" type="text" placeholder="Enter the title" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
      {movies.length > 0 ? <MovieList movies={movies} /> : !isLoading}
    </div>
  );
};

export default MoviesPage;
