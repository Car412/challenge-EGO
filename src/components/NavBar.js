import React from "react";
import egoLogo from "../logo/egoLogo.png";
import { Link, useLocation} from "react-router-dom";
import styles from "../css/navBar.module.css";
import Menu from "./Menu";



export default function NavBar({id}) {
  const location = useLocation();
  let path = location.pathname


  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.divNav}>
          <Link to="/" className={styles.link}>
            <img src={egoLogo} alt="" className={styles.logo} />
          </Link>
          <div className = {styles.on} style={{borderBottom: path === `/` ? "4px solid #EB0A1E" : null}}>
            <Link to="/" className={styles.link}>
              <p className={styles.p} style={{color : path === "/" ? "#EB0A1E" : null}}>Modelos</p>

            </Link>
          </div>
          <div className = {styles.on} style={{borderBottom: path === `/detail?id=${id}` ? "4px solid #EB0A1E" : null}}>
            <p className={styles.p} style={{color : path === `/detail?id=${id}` ? "#EB0A1E" : null}}>Ficha de Modelo</p>
          </div>
          <Menu />
        </div>
      </nav>
    </div>
  );
}
