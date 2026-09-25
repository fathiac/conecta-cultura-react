function Cartelera({ actividades, onInscribir }) {
  return (
    <section>
      <h2 className="mb-3">Actividades disponibles</h2>

      <div className="row g-4">
        {actividades.map((actividad) => (
          <div className="col-md-6 col-lg-4" key={actividad.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{actividad.nombre}</h3>

                <p className="text-muted">
                  {actividad.categoria}
                </p>

                <p className="card-text">
                  {actividad.descripcion}
                </p>

                <p>
                  <strong>Precio:</strong>{" "}
                  {actividad.precio === 0
                    ? "Gratis"
                    : `$${actividad.precio.toLocaleString("es-CL")}`}
                </p>

                <p>
                  <strong>Cupos:</strong> {actividad.cupos}
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => onInscribir(actividad)}
                  disabled={actividad.cupos === 0}
                >
                  {actividad.cupos === 0
                    ? "Sin cupos"
                    : "Inscribirme"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cartelera;
