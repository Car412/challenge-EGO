import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getModels,
  orderModels,
  sedanHatchback,
  pickupsComerciales,
  suvs,
} from "../redux/actions";
import styles from "../css/cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.models);

  const [orden, setOrden] = useState(""); // eslint-disable-next-line
  const [filter, setFilter] = useState(""); // eslint-disable-next-line
  const [menuOrder, setMenuOrder] = useState(false);
  const [menuFilter, setMenuFilter] = useState(false);

  function handleSort(e) {
    dispatch(orderModels(e.target.value));
    setOrden(e);
  }

  function handleReset() {
    dispatch(getModels());
    setOrden("Nada");
    setFilter("Nada");
  }

  function filterSedanHatchback(e) {
    dispatch(sedanHatchback(e.target.value));
    setFilter("Autos");
  }
  function filterPickups(e) {
    dispatch(pickupsComerciales(e.target.value));
    setFilter("Pickups y Comerciales");
  }
  function filterSuvs(e) {
    dispatch(suvs(e.target.value));
    setFilter("Suvs y Crossovers");
  }

  useEffect(() => {
    dispatch(getModels());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.borde}>
        <div className={styles.filtros}>
          <p className={styles.p}>Filtrar por</p>
          <button className={styles.button} onClick={handleReset}>
            Todos
          </button>
          <button className={styles.button} onClick={filterSedanHatchback}>
            Autos
          </button>
          <button className={styles.button} onClick={filterPickups}>
            Pickups y Comerciales
          </button>
          <button className={styles.button} onClick={filterSuvs}>
            SUVs y Crossovers
          </button>
        </div>
        <div
          className={styles.filtrosResponsive}
          onClick={() => setMenuFilter(!menuFilter)}
        >
          <p className={styles.pResponsive}>Filtrar por </p>

          {menuFilter && (
            <div className={styles.div}>
              <button onClick={handleReset}>Todos</button>
              <button onClick={filterSedanHatchback}>Autos</button>
              <button onClick={filterPickups}>Pickups y Comerciales</button>
              <button onClick={filterSuvs}>SUVs y Crossovers</button>
            </div>
          )}
        </div>
        <div className={styles.orden} onClick={() => setMenuOrder(!menuOrder)}>
          <p className={styles.pOrderBy}>Ordenar por </p>

          <div>
            <select onChange={(e) => handleSort(e)} className={styles.select}>
              <option value="Nada">Nada</option>
              <option value="Mayor Precio">
                De <strong>mayor</strong> a <strong>menor</strong> precio
              </option>
              <option value="Menor precio">
                De <strong>menor</strong> a <strong>mayor</strong> precio
              </option>
              <option value="Mas nuevos primero">
                Más <strong>nuevos</strong> primero
              </option>
              <option value="mas viejos primero">
                Más <strong>viejos</strong> primero
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.divCard}>
        {allModels?.map((el) => {
          return (
            <div className={styles.card} key={el.id}>
              <Card
                id={el.id}
                name={el.name}
                year={el.year}
                price={el.price}
                photo={el.photo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
