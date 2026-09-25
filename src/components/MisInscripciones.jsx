function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <section className="mt-5">
      <h2 className="mb-3">Mis inscripciones</h2>

      {inscripciones.length === 0 ? (
        <p>No tienes actividades inscritas.</p>
      ) : (
        <div className="list-group">
          {inscripciones.map((actividad) => (
            <div
              key={actividad.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{actividad.nombre}</strong>
                <p className="mb-0 text-muted">
                  {actividad.categoria}
                </p>
              </div>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => onEliminar(actividad.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MisInscripciones;
