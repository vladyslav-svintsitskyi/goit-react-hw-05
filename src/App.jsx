import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = React.lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);
const MovieDetailsPage = React.lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = React.lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = React.lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <div className="app">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
