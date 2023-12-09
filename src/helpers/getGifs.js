export const getGifs = async (categoria ) => {

    // URL de la API de Giphy para obtener gifs basados en una categoría
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=TzMUWbeIVVBru1Zz43TmR3jGISs1bDNL&q=${ categoria }&limit=10`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TzMUWbeIVVBru1Zz43TmR3jGISs1bDNL&q=${categoria}&limit=10`
    
    // Realiza la solicitud a la API
    const resp = await fetch(url);
    
    // Obtiene los datos de la respuesta y los convierte a formato JSON
    const { data } = await resp.json();
  
    // Mapea los datos obtenidos para formatearlos como se desea
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url:img.images.downsized_medium.url,
    }));
  
    console.log(gifs); // Muestra los gifs formateados en la consola
  
    // Falta el retorno de los gifs formateados para ser utilizados en otro lugar del código
    return gifs; // Agregar el retorno de los gifs mapeados
  };
  