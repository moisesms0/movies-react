import style from "./Footer.module.css";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.sections}>
          <div className={style.contacto}>
            <h4>Contacto</h4>
            <ul className={style.list}>
              <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/moisesms0/">
                <li>
                  <span>
                    <FiInstagram className={style.icon} />
                    Instagram
                  </span>
                </li>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <li>
                  <span>
                    <TfiWorld className={style.icon} />
                    Portfolio
                  </span>
                </li>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/moisés-miranda-santana-5172b1231/?originalSubdomain=es">
                <li>
                  <span>
                    <FiLinkedin className={style.icon} />
                    LinkedIn
                  </span>
                </li>
              </a>
            </ul>
          </div>
          <div className={style.recursos}>
            <h4>Recursos</h4>
            <ul>
              <a href="https://www.themoviedb.org/">
                <li>TMDB</li>
              </a>
              <a href="https://es.reactjs.org">
                <li>React</li>
              </a>
              <a href="https://pixabay.com/">
                <li>Pixabay</li>
              </a>
            </ul>
          </div>
          <div className={style.navegacion}>
            <h4>Navegación</h4>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/trending">
                <li>Trending</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
