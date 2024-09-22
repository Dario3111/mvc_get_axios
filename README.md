# Píldora MVC

Este proyecto ejemplifica la implementación del patrón de diseño **MVC (Modelo-Vista-Controlador)** en una aplicación sencilla que muestra modelos 3D utilizando la API de Sketchfab.

## Descripción del Patrón MVC

- **Modelo**: Contiene la lógica de datos y las interacciones con la base de datos. Aquí se definen las estructuras de datos y cómo interactúan con la aplicación.
- **Vista**: Incluye todas las interfaces de usuario y plantillas que se presentan al usuario. Esta es la parte visual que los usuarios ven y con la que interactúan.
- **Controlador**: Gestiona la lógica de la aplicación, actuando como intermediario entre el modelo y la vista. Procesa las entradas del usuario y actualiza los datos según sea necesario.

Esta organización modular permite una clara separación de responsabilidades, lo que simplifica el desarrollo y las futuras ampliaciones de la aplicación.

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Dario3111/pildora-mvc.git
   cd pildora-mvc
Instalar las dependencias:

bash
Copiar código
npm install
Configurar el token de la API de Sketchfab: Reemplaza YOUR_API_TOKEN en el archivo themeModel.js con tu token real que puedes obtener en tu perfil de desarrollador de Sketchfab.

Ejecutar la aplicación:

bash
Copiar código
npm run dev
Uso
Este proyecto permite visualizar modelos 3D desde la API de Sketchfab. Puedes ver cada modelo en 3D y eliminarlo de la lista, lo que refleja cómo el patrón MVC gestiona el flujo de datos y la presentación.

Tecnologías utilizadas
React
Axios
Sketchfab API
Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, realizar tus cambios y enviar un pull request.

Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

Copiar código

Asegúrate de que la información sobre la API de Sketchfab y cualquier otro detalle específico que necesites esté correctamente configurada en el proyecto. ¡Buena suerte!





