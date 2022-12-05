import { useEffect, useState } from "react";
import { get } from "../../utils/htttpClient";
import style from "./Banner.module.css";

export function Banner() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [banner, setBanner] = useState();


  useEffect(() => {

    get("/discover/movie?language=es-ES").then((data) => {
      setMovies(data.results);
      setIsLoading(false)
    });
  }, []);

  if (!isLoading && !banner) {
    setBanner("https://image.tmdb.org/t/p/original" + movies[0].backdrop_path);
  }

  let title = (movies[0]) ? movies[0].title : "";
  let overview =  (movies[0]) ? movies[0].overview : "";


  return (
    <div
    className={style.banner}
    style={{
      backgroundImage: "url(" + banner + ")",
    }}
  >
    <div className={style.data}>
      <p className={style.title}>{title}</p>
      <p className={style.overview}>{overview}</p>
    </div>
  </div>
  );
}
