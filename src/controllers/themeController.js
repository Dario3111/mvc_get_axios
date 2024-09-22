import { getThemes } from "../models/themeModel"; //Controller (Controlador): La lógica que actúa como intermediario entre el Modelo y la Vista, procesando entradas del usuario y actualizando los datos.

// Obtener todos los modelos 3D
export const fetchAllThemes = async () => {
  try {
    return await getThemes();
  } catch (error) {
    console.error("Error en el controlador al obtener modelos 3D:", error);
    throw error;
  }
};
