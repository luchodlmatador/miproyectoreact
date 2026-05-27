import ItemListContainer from "../Productos/ItemListContainer";
import styles from "./Inicio.module.css"

function Inicio() {
  return (
    <section>
      <div>
        <div>
          <h2>Sube de Nivel tu Setup</h2>
          <p>
            Los mejores periféricos gamer con diseño RGB y máximo rendimiento.
          </p>
        </div>
      </div>
      <div>
        <ItemListContainer Mensaje="Productos Destacados" Destacados={true}/>
      </div>
    </section>    
  );
}

export default Inicio;
