import { useEffect, useState } from "react";
import { get } from "../../utils/htttpClient";
import { NavLink } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";
import { Spinner } from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../empty/Empty";
import style from "./Genre.module.css";

export function Genre({ search, name }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [banner, setBanner] = useState();

  useEffect(() => {
    setIsLoading(true);
    const searchURL =
      "/discover/movie?with_genres=" +
      search +
      "&page=" +
      page +
      "&language=es-ES";
    get(searchURL).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      sethasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [page, search]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  if (!isLoading && !banner) {
    setBanner("https://image.tmdb.org/t/p/original" + movies[0].backdrop_path);
  }

  let title = movies[0] ? movies[0].title : "";
  let overview = movies[0] ? movies[0].overview : "";
  let id = movies[0] ? movies[0].id : "";

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <div
        className={style.banner}
        style={{
          backgroundImage: "url(" + banner + ")",
        }}
      >
        <p className={style.genre}>Peliculas de {name}</p>
        <div className={style.data}>
          <p className={style.title}>{title}</p>
          <p className={style.overview}>{overview}</p>
          {!isLoading && (
            <button className={style.verButton}>
              <NavLink to={"/movie/" + id} className={style.verButtonLink}>
                <span>Ver ahora</span>
              </NavLink>
            </button>
          )}
        </div>
      </div>

      <ul className="moviesGrid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id + "a"}
            movie={movie}
            tipo={true}
            tipoBol={false}
          />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
