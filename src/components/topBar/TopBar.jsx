import { Search } from "../search/Search";
import style from "./TopBar.module.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";




export function TopBar() {

  function setMode(mode){
    console.log(mode)
    document.documentElement.setAttribute("data-theme", mode)
  }


  return (
    <div className={style.topBar}>
      <button onClick={() => setMode('light')} className={style.sunButton}><RiSunFill /></button>
      <button onClick={() => setMode('dark')} className={style.moonButton}><RiMoonFill /></button>
    

      <Search></Search>
    </div>
  );
}
