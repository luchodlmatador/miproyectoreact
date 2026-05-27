import { useState } from "react";
import "./App.css";
import Layout from "./componentes/Layout/Layout";
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from "./componentes/Productos/ItemListContainer";
import FormularioContenedor from "./componentes/FormularioProducto/FormularioContenedor";
import Inicio from "./componentes/Inicio/Inicio";

function App() {
  console.log("OK");
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer Mensaje={"Nuestros Productos"} />}/>
        <Route path="/nuevoproducto" element={<FormularioContenedor/>}/>
      </Route>
    </Routes>
  );
}

export default App;