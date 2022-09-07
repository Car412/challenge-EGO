import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/details.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
            <h3>{modelDetail.name}</h3>
            <h1>{modelDetail.title}</h1>
            <p>{modelDetail.description}</p>
            <img
              src={modelDetail.photo}
              alt={modelDetail.name}
            />
          </div>
        )}
        <div>
        <ContenedorPrincipal>
      <ContenedorSlideShow>
        {modelDetail &&
          modelDetail.model_features.map((el) => (
            <Slides>
              <img src={el.image} alt=""/>
              <TextoSlide nombre>
                <h3>{el.name}</h3>
              </TextoSlide>
              <br></br>
              <br></br>
              <TextoSlide descripcion>
              <h3>{el.description}</h3>
              </TextoSlide>
            </Slides>
          ))}
      </ContenedorSlideShow>
      <Controles>
        <Boton>
          <AiOutlineLeft />
        </Boton>
        <Boton derecho>
          <AiOutlineRight />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
        </div>

        <div className={styles.containerHighlights}>
          {modelDetail &&
            modelDetail.model_highlights.map((el) => (
              <div className={styles.divHighlights}  key={el.title}>
                <img src={el.image} alt=""/>
                <div>
                <h3>{el.title}</h3>
                <p>{el.content}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* Slider con styled */

const ContenedorPrincipal = styled.div`
  position: relative;
  height: 410px;
  margin-right: 10%;
  margin-left: 10%;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Slides = styled.div`
width: 270px;
margin-left: auto;
margin-right: auto;
  img {
    width: 270px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 43px;
    margin-bottom: 20px;
    
  }
`;

const TextoSlide = styled.div`
  background-color: transparent;
  color: #373737;
  width: 241px;
  height: 27px;
  text-align: center;
  position: relative;
  bottom: 0;
  ${(props) => (props.nombre ? "font-size:20px font-weight: 600 color:#373737 line-height: 27px letter-spacing: -0.4px max-width: 270px;" : null)}
  ${(props) => (props.descripcion ? "font-size:16px font-weight: 400 color:#373737 line-height: 27px letter-spacing: -0.1px align-self:flex-end position:absolute margin-top:700px" : null)}
  @media screen and (max-width: 910px) {
    position: relative;
  }
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  /* &:hover {
    background: rgba(0,0,0,.2);
    path {
        fill: #fff;
    }
} */
  /* path {
    filter: ${(props) =>
    props.derecho
      ? "drop-shadow(-2px 0px 0px #fff)"
      : "drop-shadow(2px 0px 0px #fff)"};
  } */
  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;
