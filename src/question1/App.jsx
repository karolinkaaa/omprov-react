// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  function handleAdd() {
    if (newMovie) {
      setMovies([...movies, newMovie]);
      setNewMovie("");
    }
  }

  function handleDelete(movieId) {
    setMovies(movies.filter((_, i) => i !== movieId));
  }

  return (
    <div>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {movies.map((movie, movieId) => (
          <li key={movieId}>
            {movie}
            <button onClick={() => handleDelete(movieId)}> Remove </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
