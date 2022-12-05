import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import { get } from "../../utils/htttpClient";
import { iconos } from "../../utils/icons";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  const [genres, setGenres] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    get("/genre/movie/list?language=es-ES").then((data) => {
      setGenres(data.genres);
    });
  }, []);

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  return (
    <div className={style.aux}>
      <div className={style.icono} onClick={() => setHidden(!hidden)}>
        <GiHamburgerMenu />
      </div>
      <div
        className={style.master}
        style={{
          left: hidden ? "-15rem" : "0",
        }}
      >
        <div className={style.main}>
          <div className={style.logo}>
            <NavLink to="/" onClick={() => setHidden(!hidden)}>
              <h2>Films</h2>
            </NavLink>
          </div>

          <div className={style.links}>
            <h3>Categorias</h3>
            <NavLink
              onClick={() => setHidden(!hidden)}
              className={style.link}
              to="/"
            >
              <FiHome className={style.icon} />
              Inicio
            </NavLink>
            <NavLink
              onClick={() => setHidden(!hidden)}
              className={style.link}
              to="trending"
            >
              <FiTrendingUp className={style.icon} />
              Trending
            </NavLink>
          </div>

          <div className={style.genres}>
            <h3>Géneros</h3>
            {genres?.map((genre, idx) => {
              const Icon = iconos[idx];

              return (
                <NavLink
                  onClick={() => setHidden(!hidden)}
                  className={style.link}
                  key={genre.id}
                  to={
                    "/genre/" +
                    removeAccents(genre.name) +
                    "?genreid=" +
                    genre.id + "&name="+
                    genre.name
                  }
                >
                  <Icon className={style.icon} />
                  {genre.name}
                </NavLink>
              );
            })}
          </div>
        </div>

        <header></header>
      </div>
    </div>
  );
}
