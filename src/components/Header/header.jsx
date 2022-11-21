import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Search } from "../search/Search"

export function Header() {
  return (
    <header>
      <div className={style.logo}>
        <h2>Movies</h2>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="trending">Trending</NavLink>
      </div>
      <Search/>
      
    </header>
  );
}
