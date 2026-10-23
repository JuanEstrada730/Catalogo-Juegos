import { useState } from "react"
import { videojuegos } from "./data/videojuegos"
import TarjetaJuego from "./components/TarjetaJuego"
import DetalleJuego from "./components/DetalleJuego"

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [genero, setGenero] = useState("Todos")
  const [favoritos, setFavoritos] = useState([])
  const [soloFavoritos, setSoloFavoritos] = useState(false)
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)

  const generos = ["Todos", ...new Set(videojuegos.map((j) => j.genero))]

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  const juegosFiltrados = videojuegos.filter((juego) => {
    const coincideNombre = juego.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
    const coincideGenero = genero === "Todos" || juego.genero === genero
    const coincideFavorito = !soloFavoritos || favoritos.includes(juego.id)

    return coincideNombre && coincideGenero && coincideFavorito
  })

  return (
    <div>
      <h1>Catálogo de Videojuegos</h1>

      <input
        type="text"
        placeholder="Buscar videojuego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        {generos.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <div className="barra-favoritos">
        <p className="contador">Favoritos: {favoritos.length}</p>
        <button onClick={() => setSoloFavoritos(!soloFavoritos)}>
          {soloFavoritos ? "Ver todos" : "Ver solo favoritos"}
        </button>
      </div>

      <div className="catalogo">
        {juegosFiltrados.map((juego) => (
          <TarjetaJuego
            key={juego.id}
            juego={juego}
            esFavorito={favoritos.includes(juego.id)}
            onToggleFavorito={toggleFavorito}
            onSeleccionar={setJuegoSeleccionado}
          />
        ))}
      </div>

      {juegoSeleccionado && (
        <DetalleJuego
          juego={juegoSeleccionado}
          onCerrar={() => setJuegoSeleccionado(null)}
        />
      )}
    </div>
  )
}

export default App