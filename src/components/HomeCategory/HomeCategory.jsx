import { useEffect, useState } from "react";
import { get } from "../../utils/htttpClient";
import { MovieCard } from "../MovieCard/MovieCard";
import { Spinner } from "../Spinner/Spinner";
import Style from "./HomeCategory.module.css";

export function HomeCategory({ searchUrl, titulo }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);


    const searchURL = searchUrl;

    get(searchURL).then((data) => {
      setMovies(data.results.slice(0, 8));
      setIsLoading(false);
    });
  }, [searchUrl]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section>
      <h1 className={Style.title}>{titulo}</h1>
      <ul className="moviesGrid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} tipoBol={false} />
        ))}
      </ul>
    </section>
  );
}
