import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.box}>
        <input
          spellCheck="false"
          className={style.input}
          type="text"
          placeholder="Titulo..."
          value={search ?? ""}
          aria-label="Search movies"
          onChange={(e) => {
            const value = encodeURIComponent(e.target.value);
            if (value !== "%20") {
              navigate("/search/?search=" + value);
            }
            if (value === "") {
              navigate("/");
            }
          }}
        />

        <button
          aria-label="Search button"
          className={style.searchBtn}
          type="submit"
        >
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
