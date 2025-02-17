import { useEffect, useState } from "react";
import { get } from "../../utils/htttpClient";

import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import { Spinner } from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../empty/Empty";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchURL = search
      ? "/search/multi?query=" + search + "&page=" + page + "&language=es-ES"
      : "/discover/movie?page=" + page + "&language=es-ES";
    get(searchURL).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      sethasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className="moviesGrid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} tipo={true} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
