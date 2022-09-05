import React from "react";
import egoLogo from "../logo/egoLogo.png";
import { Link } from "react-router-dom";
import styles from "../css/navBar.module.css";
import Menu from "./Menu";

export default function NavBar({ id }) {
  return (
    <div>
      <nav>
        <div className={styles.nav}>
          <Link to="/" className={styles.link}>
            <img src={egoLogo} alt="" className={styles.logo} />
          </Link>
          <div>
            <Link to="/" className={styles.link}>
              <p className={styles.p}>Modelos</p>
            </Link>
          </div>
          <div>
            <p className={styles.p}>Ficha de Modelo</p>
          </div>
          <Menu />
        </div>
      </nav>
    </div>
  );
}
