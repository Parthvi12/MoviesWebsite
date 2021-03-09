import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./css/Movie.css";

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);

  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6dda08f4baa3d9a8948875819f76ccd2";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await fetch(url);
    console.log(response);
    const movieData = await response.json();
    console.log(movieData);
    setMovieData(movieData.results);
  };
  return (
    <React.Fragment>
      <article className="Movies">
        {movieData.map((movie) => {
          return <MovieCard movie={movie}></MovieCard>;
        })}
      </article>
    </React.Fragment>
  );
};
const MovieCard = (props) => {
  const imgurl = "https://image.tmdb.org/t/p/w500";
  const { poster_path, title, release_date, id } = props.movie;
  return (
    <Link to={`/movie/${id}`}>
      <section className="mlist">
        <img src={imgurl + poster_path} alt=" " />
        <h4>{title}</h4>
        <h5>{release_date}</h5>
      </section>
    </Link>
  );
};

export default MovieList;
