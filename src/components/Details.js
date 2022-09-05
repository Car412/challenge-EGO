import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/details.module.css";

export default function Details () {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");

  const [modelDetail, setModelDetail] = useState(null);

  useEffect (()=>{
    const endpoint = `https://challenge.agenciaego.tech/api/models/${id}/`;
    axios.get (endpoint).then((response) =>{
      const ficha = response.data;
      console.log(ficha)
      setModelDetail(ficha);
    })
  }, [id]);

 

  return (
    <div>
      <div>
        {
          modelDetail && (
            <div   className={styles.container}>
              <h3 className={styles.h3}>{modelDetail.name}</h3>
              <h1 className={styles.h1}>{modelDetail.title}</h1>
              <img src={modelDetail.photo} alt={modelDetail.name} className={styles.img}/>
              <p>{modelDetail.description}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}



























/* import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getDetails} from "../redux/actions";

export default function Details (){
  const dispatch = useDispatch();
  const {id} = useParams();

  const details = useSelector((state)=> state.details)
  const features = useSelector((state)=> state.model_features)
  const highlights = useSelector((state)=> state.model_highlights)

  useEffect (()=> {
    dispatch(getDetails(id));
  }, [id]);

  return (
    <div>
        <div>
            <h3>{details.name}</h3>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
            <img src={details.photo} alt={details.name}/>
        </div>
    </div>
  )
} */
