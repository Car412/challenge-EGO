import React from "react";
import styles from "../css/card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, price, year, photo }) {
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <h3>
        {year} | ${price}
      </h3>
      <img src={photo} alt={name}/>
      <div className={styles.divButton}>
        <Link to={`/detail?id=${id}`} className={styles.link}>
          <button>Ver Modelo</button>
        </Link>
      </div>
    </div>
  );
}
