
import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/htttpClient";
import { Spinner } from "../components/Spinner/Spinner";




export function ShowDetails() {
  const { movieid } = useParams();
  const [isLoading, SetIsLoading] = useState(true)
  const [movie, setMovie] = useState(null);




  useEffect(() => {
    SetIsLoading(true);

    get("/tv/" + movieid + "?language=es-ES").then((data) => {
      setMovie(data);
      SetIsLoading(false)
    });

    



  }, [movieid]);

  if (isLoading){
    return <Spinner/>;
  }
  


  
  
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={style.detailsContainer}>
      <img
        className={style.col + " " + style.img}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={style.col}>
        <p>
          <b>Title:</b> {movie.name}
        </p>
        <p>
          <b>Genres: </b>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <b>Description:</b> {movie.overview}
        </p>
      </div>
    </div>
  );
}
