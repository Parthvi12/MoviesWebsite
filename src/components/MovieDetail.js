import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieCard.css";

export default function MovieDetail(props) {
  let { id } = useParams();
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=6dda08f4baa3d9a8948875819f76ccd2&append_to_response=videos`;
  const [moviesDetail, setMoviesDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await fetch(url);
    console.log(response);
    const moviesDetail = await response.json();
    console.log(moviesDetail);
    setMoviesDetail(moviesDetail);
    setIsLoading(false);
  };
  const imgurl = "https://image.tmdb.org/t/p/w500";
  const bgBaseURL = "https://image.tmdb.org/t/p/original";
  const videoURL = "https://www.youtube.com/watch?v=";

  return isLoading ? (
    <> Loading... </>
  ) : (
    <>
      <div
        className="moviecard"
        style={{
          backgroundImage: `url(${bgBaseURL + moviesDetail.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "-1",
        }}
      ></div>

      <div className="container">
        <img
          className="imgbody"
          style={{ height: "500px" }}
          src={imgurl + moviesDetail.poster_path}
          alt=""
        />
        <div className="textbody">
          <h1 style={{ margin: "0.5rem" }}>{moviesDetail.title}</h1>
          <h4 style={{ margin: "0.5rem" }}>{moviesDetail.tagline}</h4>
          <p style={{ textAlign: "justify", margin: "0.5rem" }}>
            {moviesDetail.overview}
          </p>
          <div>
            {moviesDetail.genres.map((genre) => (
              <div className="genres">{genre.name}</div>
            ))}
          </div>

          <a
            className="trailer"
            href={
              videoURL + moviesDetail.videos.results.map((video) => video.key)
            }
            target="_blank"
          >
            Watch trailer
          </a>
        </div>
      </div>
    </>
  );
}
//const Movie = (props) => {};
