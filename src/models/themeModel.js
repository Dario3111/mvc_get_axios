import axios from "axios";

// URL base de Sketchfab API
const BaseUrl = "https://api.sketchfab.com/v3/models";

// API Token de Sketchfab (lo debes conseguir en tu perfil de desarrollador)
const token = "YOUR_API_TOKEN"; // Reemplaza con tu token real

// Obtener todos los modelos 3D
export const getThemes = async () => {
  try {
    const response = await axios.get(BaseUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Autenticación
      },
    });
    return response.data.results; // Devuelve los datos de los modelos 3D
  } catch (error) {
    console.error("Error al obtener los modelos 3D:", error);
    throw error;
  }
};

// La API de Sketchfab no permite crear, actualizar ni eliminar modelos
