import React, { useState } from "react";

function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    console.log(onNewCategory);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //  setInputValue([inputValue, ...setCategorias])
    if (inputValue.trim().length <= 1) return;
    {
      //validacion, debe haber minimo un caracter
      //  setCategorias((categorias)=> [inputValue,...categorias])
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
    //setCategorias([...])
  };
  return (
    <form onSubmit={onSubmit} action="">
      <input
        placeholder="Ingresa la referencia a buscar"
        type="text"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;
