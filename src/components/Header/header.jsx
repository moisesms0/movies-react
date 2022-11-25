import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Search } from "../search/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={style.main}>
      <header>
        <div className={style.logo}>
          <NavLink to="/">
            <h2>Movies</h2>
          </NavLink>
          <NavLink className={style.link} to="/">
            Inicio
          </NavLink>
          <NavLink className={style.link} to="trending">
            Trending
          </NavLink>
        </div>

        <Search />
        <button className={style.menuIcon}>
          <GiHamburgerMenu
            className={style.hamburguer}
            size={22}
            onClick={() => setNavOpen(!navOpen)}
          />
        </button>

        <div
          className={style.menuOverlay}
          style={{
            top: navOpen ? "0" : "-5rem",
          }}
        >
  
              <NavLink to="/" onClick={() => setNavOpen(!navOpen)}>Inicio</NavLink >
   
              <NavLink to="trending" onClick={() => setNavOpen(!navOpen)}>Trending</NavLink>

        </div>
      </header>
    </div>
  );
}
