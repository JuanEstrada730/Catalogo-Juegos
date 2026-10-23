function DetalleJuego({ juego, onCerrar }) {
  return (
    <div className="fondo-modal" onClick={onCerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={juego.imagen} alt={juego.nombre} />
        <div className="modal-info">
          <h2>{juego.nombre}</h2>
          <p><strong>Género:</strong> {juego.genero}</p>
          <p><strong>Año de lanzamiento:</strong> {juego.anio}</p>
          <p>{juego.descripcion}</p>
          <button onClick={onCerrar}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default DetalleJuego