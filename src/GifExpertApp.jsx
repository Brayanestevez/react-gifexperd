import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categorias, setCategorias] = useState(["Spiderman"]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return; //esta linea esta validando que la nueva categoria sea diferente y se escriba, si no, no se escribe
    setCategorias([newCategory ,...categorias]);
    // console.log(onAddCategory);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/*   <AddCategory setCategorias = { setCategorias }/> /se va mandar una funcion */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
  
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        //   <div key={categoria}>
        //   <h3>{categoria}</h3>
        //   <li >{categoria}</li>
        // </div>
        ))}
     
      {/* <button onClick={onAddCategory}>Agregar</button> */}
    </>
  );
}

export default GifExpertApp;
