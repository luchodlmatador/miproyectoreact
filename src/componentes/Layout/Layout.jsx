import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom"

function Layout() {
    return (
      <>
        <Header />
        <main className="container my-4">
          <Outlet />
        </main>
        <Footer />
      </>
    );
}

export default Layout;

