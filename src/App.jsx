import Bienvenida from "./components/Bienvenida";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import PiePagina from "./components/PiePagina";
import TarjetaActividad from "./components/TarjetaActividad";

function App() {
  return (
    <>
      <Cabecera />

      <Navegacion />

      <main className="container py-4">
        <Bienvenida />

        <section id="actividades">
          <h2 className="mb-4">Actividades</h2>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <TarjetaActividad />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <TarjetaActividad />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <TarjetaActividad />
            </div>
          </div>
        </section>
      </main>

      <PiePagina />
    </>
  );
}

export default App;
