import { PopularMovies } from "../components/HomeCategory/HomeCategory";

export function Home() {


    return (
        <div>
            <PopularMovies searchUrl="/discover/movie?language=es-ES" titulo="Peliculas Populares"/>
            <PopularMovies searchUrl="/tv/popular?language=es-ES" titulo="Series de TV Populares"/>

        </div>
    )
}
