import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { HomeCategory } from "../components/HomeCategory/HomeCategory";

export function Home() {


    return (
        <div>
            <Banner/>
            <HomeCategory searchUrl="/discover/movie?language=es-ES" titulo="Peliculas Populares"/>
            <HomeCategory searchUrl="/tv/popular?language=es-ES" titulo="Series de TV Populares"/>
            <HomeCategory searchUrl="/discover/movie?with_genres=28" titulo="Acción"/>
            <HomeCategory searchUrl="/discover/movie?with_genres=35" titulo="Comedias"/>
            <HomeCategory searchUrl="/discover/movie?with_genres=27" titulo="Terror"/>
            <HomeCategory searchUrl="/discover/movie?with_genres=10402" titulo="Para toda la familia"/>
            <Footer></Footer>
        </div>
    )
}
