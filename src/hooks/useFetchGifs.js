import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {

  // Estado para almacenar las imágenes
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // Función asincrónica para obtener las imágenes
  const getImages = async () => {
    // Llama a la función getGifs con la categoría proporcionada
    const newImages = await getGifs(categoria);
    // Actualiza el estado de images con las nuevas imágenes obtenidas
    setImages(newImages);
    setIsLoading(false)
  };

  // Efecto que se ejecuta al montar el componente
  useEffect(() => {
    // Llama a la función para obtener las imágenes
    getImages();
  }, []); // El efecto se ejecuta solo una vez al montar el componente


return{
    images,
 isLoading
}
}
