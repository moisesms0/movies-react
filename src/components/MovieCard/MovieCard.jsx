import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie, tipoBol }) {

  // Only movies with poster
  if (movie.poster_path) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    // Category and type check
    let category = movie.title ? "/movie/" : "/show/";
    let tipo = movie.title ? "Película" : "Serie";

    // Slice year from date
    let fecha = movie.release_date
      ? movie.release_date.slice(0, 4)
      : movie.first_air_date
      ? movie.first_air_date.slice(0, 4)
      : "";

    // Badge check
    let hidden = tipoBol === false ? " " + styles.hidden : "";

    return (
      <li className={styles.movieCard}>
        <Link to={category + movie.id}>
          <div className={styles.container}>
            <img
              className={styles.movieImg}
              src={imageUrl}
              alt={movie.title}
            ></img>
            <div className={styles.title}>
              <h2>{movie.title || movie.name}</h2>
              <span>{fecha}</span>
            </div>
            <span className={styles.puntuacion}>{movie.vote_average}</span>
            <span className={styles.tipo + hidden}>{tipo}</span>
          </div>
        </Link>
      </li>
    );
  }
}
