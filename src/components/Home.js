import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import Cards from "./Cards";
import styles from "../css/home.module.css"

export default function Home (){
  return (
    <div>
      <NavBar />
      <h1 className={styles.h1}>Descubrí todos los modelos</h1>
      <Cards/>
      <Footer />
    </div>
  )
}
