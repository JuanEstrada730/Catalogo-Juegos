function TarjetaJuego({ juego, esFavorito, onToggleFavorito, onSeleccionar }) {
  return (
    <div className="tarjeta">
      <div className="zona-clic" onClick={() => onSeleccionar(juego)}>
        <img src={juego.imagen} alt={juego.nombre} />
        <h3>{juego.nombre}</h3>
        <p>{juego.genero}</p>
        <p>{juego.anio}</p>
      </div>
      <button
        className={esFavorito ? "btn-fav activo" : "btn-fav"}
        onClick={() => onToggleFavorito(juego.id)}
      >
        {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  )
}

export default TarjetaJuego