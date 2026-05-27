import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.navbar}>
    <h1 className={styles.logo}>GamerZone</h1>

    <nav>
      <ul className={styles.navlinks}>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/productos">Productos</Link></li>
      </ul>
    </nav>
  </header>
);
}
    
export default Header;
