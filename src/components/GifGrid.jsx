import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ categoria }) {

  //aca creamos un custom hook y resume todo el codigo comentado

  const {images, isLoading} = useFetchGifs (categoria);
  console.log(images)
 
  // // Estado para almacenar las imágenes
  // const [images, setImages] = useState([]);

  // // Función asincrónica para obtener las imágenes
  // const getImages = async () => {
  //   // Llama a la función getGifs con la categoría proporcionada
  //   const newImages = await getGifs(categoria);
  //   // Actualiza el estado de images con las nuevas imágenes obtenidas
  //   setImages(newImages);
  // };

  // // Efecto que se ejecuta al montar el componente
  // useEffect(() => {
  //   // Llama a la función para obtener las imágenes
  //   getImages();
  // }, []); // El efecto se ejecuta solo una vez al montar el componente


  // Renderizado del componente
  return (
    <>
      {/* Título con la categoría */}
      <h3>{categoria}</h3>
      {isLoading ?(  <h2 >cargando.....</h2>): null}
    
      {/* Lista ordenada con los títulos de las imágenes */}
      <div className="card-grid">
      {images.map((image) => (
         <GifItem key={image.id}  { ...image }/>
       
       ))}
    
      </div>
    </>
  );
}
