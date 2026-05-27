import { useState } from "react";
import styles from "./ItemListContainer.module.css";

function Item({ imagen, nombre, precio }) {
  const [esFavorito, setEsFavorito] = useState(false);

  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${styles.card}`}>
        <img
          src={imagen}
          className={`card-img-top ${styles.cardImg}`}
          alt={nombre}
        />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p><a href="">Ver más</a></p>
        <div>
          <button onClick={incrementar}>+</button>
          <p style={{ margin: "0 10px" }}>{cantidad}</p>
          <button onClick={decrementar}>-</button>
        </div>

        <button onClick={agregarAlCarrito}>Comprar</button>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={marcarComoFavorito}
        >
          {esFavorito ? "⭐" : "☆"}
        </span>
      </div>
    </div>
  );
}

export default Item;
