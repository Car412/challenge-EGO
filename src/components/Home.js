import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import Footer from "../components/Footer"
import styles from "../css/home.module.css"

export default function Home (){
  return (
    <div>
      <NavBar />
      <h1 className={styles.h1}>Descubrí todos los modelos</h1>
      <Cards />
      <Footer />
    </div>
  )
}
