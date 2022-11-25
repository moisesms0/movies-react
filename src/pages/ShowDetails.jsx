import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/htttpClient";
import { Spinner } from "../components/Spinner/Spinner";
import { MovieCard } from "../components/MovieCard/MovieCard";

export function ShowDetails() {
  const { movieid } = useParams();
  const [isLoading, SetIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSingular, setMovieSingular] = useState(null);

  useEffect(() => {
    SetIsLoading(true);

    get("/tv/" + movieid + "?language=es-ES").then((data) => {
      setMovieSingular(data);
      SetIsLoading(false);
    });

    get("/tv/" + movieid + "/recommendations?language=es-ES").then((data) => {
      setMovies(data.results.slice(0, 8));
    });
  }, [movieid]);

  if (isLoading) {
    return <Spinner />;
  }

  let fecha = movieSingular.first_air_date
    ? movieSingular.first_air_date.slice(0, 4)
    : "";

  let overview = movieSingular.overview
    ? movieSingular.overview
    : "No disponible";

  let tiempo = "";

  console.log(movieSingular.episode_run_time[0]);

  if (movieSingular.episode_run_time[0] && !isLoading) {
    let segundosP = movieSingular.episode_run_time[0] * 60;
    const horas = Math.floor(segundosP / 3600).toString();
    const minutos = (Math.floor(segundosP / 60) % 60).toString();
    tiempo = horas > 0 ? horas + "h " + minutos + "m" : minutos + "m";
  }

  const imageUrl =
    "https://image.tmdb.org/t/p/w500" + movieSingular.poster_path;
  return (
    <div>
      <div className={style.cont}>
        <div className={style.detailsContainer}>
          <img
            className={style.col + " " + style.img}
            src={imageUrl}
            alt={movieSingular.title}
          />
          <div className={style.col + " " + style.principal}>
            <p className={style.title}>
              {movieSingular.name} ({fecha})
            </p>
            <div className={style.facts}>
              <span className={style.list}>
                {movieSingular.genres.map((genre) => genre.name).join(", ")}
              </span>{" "}
              <span className={style.list}>{tiempo}</span>
            </div>
            <p className={style.tagline}>{movieSingular.tagline}</p>
            <p className={style.descripcion}>
              <b>Vista General</b>
              <br /> {overview}
            </p>
          </div>
          <div className={style.col + " " + style.datos}>
            <div>
              <div>
                <p>Título Original</p>
                <span>{movieSingular.original_name}</span>
              </div>
              <div>
                <p>Puntuación</p>
                <span>{movieSingular.vote_average.toFixed(1)}</span>
              </div>
              <p>Temporadas</p>
              <span>{movieSingular.number_of_seasons}</span>
            </div>
            <div>
              <p>Capitulos</p>
              <span>{movieSingular.number_of_episodes}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.similares}>
        <p>Similares</p>
        <ul className={style.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} tipoBol={false} />
          ))}
        </ul>
      </div>
    </div>
  );
}
