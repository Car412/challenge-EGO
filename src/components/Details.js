import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/details.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Details() {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");

  const [modelDetail, setModelDetail] = useState(null);

  useEffect(() => {
    const endpoint = `https://challenge.agenciaego.tech/api/models/${id}`;
    axios.get(endpoint).then((response) => {
      const ficha = response.data;
      console.log(ficha);
      setModelDetail(ficha);
    });
  }, [id]);

  return (
    <div>
      <NavBar />
      <div>
        {modelDetail && (
          <div className={styles.container}>
            <h3 className={styles.h3}>{modelDetail.name}</h3>
            <h1 className={styles.h1}>{modelDetail.title}</h1>
            <p>{modelDetail.description.substring(26, 72)}</p>
            <img
              src={modelDetail.photo}
              alt={modelDetail.name}
              className={styles.img}
            />
          </div>
        )}
        <div className={styles.containerFeatures}>
          {modelDetail &&
            modelDetail.model_features.map((el) => (
              <div>
                <img src={el.image} alt="" />
                <h3 className={styles.h3Feat}>{el.name}</h3>
                <p className={styles.pFeat}>{el.description}</p>
              </div>
            ))}
        </div>
        <div className={styles.containerHighlights}>
          {modelDetail &&
            modelDetail.model_highlights.map((el) => (
              <div className={styles.divHighlights}>
                <img src={el.image} alt="" className={styles.imgHigh} />
                <h3 className={styles.h3High}>{el.title}</h3>
                <p className={styles.pHigh}>{el.content.substring(26, 213)}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
