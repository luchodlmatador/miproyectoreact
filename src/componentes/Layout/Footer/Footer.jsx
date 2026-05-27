import Directorio from "../../Equipo/Directorio";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4">
      <div className="container">
        <h5 className="mb-3">Nuestro equipo</h5>
        <Directorio />

        <hr />

        <p className="text-center">& 2026 - GameCenterReact</p>
      </div>
    </footer>
  );
}

export default Footer;

