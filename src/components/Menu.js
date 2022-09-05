import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../css/menu.module.css";

export default function Menu (){
    const [menu, setMenu] = useState(false)

    return (
        <div className={styles.container}>
            <p className={styles.pMenu}>Menu</p>
            <p onClick={()=> setMenu(!menu)} className={styles.img}><AiOutlineMenu/></p>
            {
                menu && 
                <div className={styles.open}>
                    <div onClick={()=> setMenu(!menu)} className={styles.close}>
                        <p className={styles.pClose}>Cerrar</p>
                        <p><AiOutlineClose/></p>
                    </div>
                    <div className={styles.options}>
                        <Link to="/" onClick={()=> setMenu(!menu)} className={styles.link}>Modelos</Link>
                        <p className={styles.p}>Servicios y Accesorios</p>
                        <p className={styles.p}>Financiación</p>
                        <p className={styles.p}>Reviews y Comunidad</p>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.options}>
                        <p className={styles.p}>Toyota Mobility Service</p>
                        <p className={styles.p}>Toyota Gazoo Racing</p>
                        <p className={styles.p}>Toyota Híbridos</p>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.options}>
                        <p className={styles.p}>Concesionarios</p>
                        <p className={styles.p}>Test Drive</p>
                        <p className={styles.p}>Contacto</p>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.optionsGris}>
                        <p className={styles.p}>Actividades</p>
                        <p className={styles.p}>Servicios al Cliente</p>
                        <p className={styles.p}>Ventas Especiales</p>
                        <p className={styles.p}>Innovación</p>
                        <p className={styles.p}>Prensa</p>
                        <p className={styles.p}>Acerca de...</p>
                    </div>
                </div>
            }
        </div>
    )
}