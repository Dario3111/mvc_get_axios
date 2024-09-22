import { useState, useEffect } from "react"; //View (Vista): La interfaz de usuario que muestra la información.
import { fetchAllThemes } from "../controllers/themeController";

function App() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const loadModels = async () => {
      const allModels = await fetchAllThemes();
      setModels(allModels);
    };
    loadModels();
  }, []);

  // Aquí se ubica la función handleDelete
  const handleDelete = (uid) => {
    // Actualizar el estado local para eliminar el modelo de la visualización
    setModels(models.filter((model) => model.uid !== uid));
  };

  return (
    <div className="App">
      <h1>
        Píldora MVC <br /> (Modelo-Vista-Controlador){" "}
      </h1>
      <ul>
        {models.map((model) => (
          <li key={model.uid}>
            <h2>{model.name}</h2>
            <img
              src={model.thumbnails.images[0].url}
              alt={model.name}
              width="300"
            />
            <a href={model.viewerUrl} target="_blank" rel="noopener noreferrer">
              Ver modelo en 3D
            </a>
            <button onClick={() => handleDelete(model.uid)}>
              <i class="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
