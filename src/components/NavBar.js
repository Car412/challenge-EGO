import React from "react";
import logoEgo from "../logoEgo.svg"
import { Link, useLocation} from "react-router-dom";
import styles from "../css/navBar.module.css";
import Menu from "./Menu";

export default function NavBar({id}) {
  const location = useLocation();
  let path = location.pathname


  return (
    <>
      <nav>
        <div className={styles.nav}>
          <figure>
            <Link to='/' style={{textDecoration: 'none'}}>
              <img src={logoEgo} alt="Logo" />
            </Link>
          </figure>
          <div className={styles.active} style={{borderBottom: path === `/` ? '4px solid #D0021B' : null}}> 
            <Link to='/' style={{textDecoration: 'none'}}>
              <p style={{color: path === `/` ? '#D0021B' : null}}>
              Modelos
              </p>
            </Link>
          </div>
          <div className={styles.active} style={{borderBottom: path === `/detail?id=${id}` ? '4px solid #D0021B' : null}}>
            <p style={{cursor:'pointer', color: path === `/detail?id=${id}` ? '#D0021B' : null}}>
              Ficha de modelo
            </p>
          </div>
          <Menu />
        </div>
      </nav>
    </>
  );
}


