import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/htttpClient";
import { Spinner } from "../components/Spinner/Spinner";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Empty } from "../components/empty/Empty";

export function MovieDetails() {
  const { movieid } = useParams();
  const [isLoading, SetIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSingular, setMovieSingular] = useState(null);

  useEffect(() => {
    SetIsLoading(true);

    get("/movie/" + movieid + "?language=es-ES").then((data) => {
      setMovieSingular(data);
      SetIsLoading(false);
    });

    get("/movie/" + movieid + "/recommendations?language=es-ES").then(
      (data) => {
        setMovies(data.results.slice(0, 8));
      }
    );
  }, [movieid]);

  if (isLoading) {
    return <Spinner />;
  }


  

  let tiempo = "";

  if (movieSingular.runtime && !isLoading) {
    let segundosP = movieSingular.runtime * 60;
    const horas = Math.floor(segundosP / 3600).toString();
    const minutos = (Math.floor(segundosP / 60) % 60).toString();
    tiempo = horas + "h " + minutos + "m";
  }
  else if (movieSingular.runtime === 0){
    tiempo = "No disponible"
  }

  let presupuesto =
    movieSingular.budget !== 0
      ? new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD",
        }).format(movieSingular.budget)
      : "No disponible";

  let recaudado =
    movieSingular.revenue !== 0
      ? new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD",
        }).format(movieSingular.revenue)
      : "No disponible";

  const imageUrl =
    "https://image.tmdb.org/t/p/w500" + movieSingular.poster_path;

    
  let overview = movieSingular.overview
  ? movieSingular.overview
  : "No disponible";




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
            <p className={style.title}>{movieSingular.title}</p>
            <div className={style.facts}>
              <span className={style.list}>{movieSingular.release_date}</span>
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
            <div className={style.imdb_container}>
              <a
                className={style.imdb_button}
                href={"https://www.imdb.com/title/" + movieSingular.imdb_id}
              >
                IMDb
              </a>
            </div>
          </div>
          <div className={style.col + " " + style.datos}>
            <div>
              <p>Título Original</p>
              <span>{movieSingular.original_title}</span>
            </div>
            <div>
              <p>Puntuación</p>
              <span>{movieSingular.vote_average.toFixed(1)}</span>
            </div>
            <div>
              <p>Presupuesto</p>
              <span>{presupuesto}</span>
            </div>
            <div>
              <p>Recaudado</p>
              <span>{recaudado}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.similares}>
        <p>Similares</p>
        <ul className={style.moviesGrid}>
          {movies.length !== 0 ? movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} tipoBol={false} />
          ))
        : "No hay peliculas similares disponibles"
        }
        </ul>
      </div>
    </div>
  );
}
