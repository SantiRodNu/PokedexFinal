// Importamos el Usefetch para extraer la informacion de la url que tiene cada pokemon
import { Usefetch } from "../Api/Usefetch";
import "./cardPokemon.css";
import Detalles from "./Detalles";
import Modal from "./Modal";
import { useState } from "react";

export const CardPokemon = ({ pokemon }) => {
  // Las siguientes constantes y funciones son para darle funcionalidad a la ventana modal
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  
  return (
    // Este componente CardPokemon es el encargado de mostrar la info de cada pokemon
    // La url que se le está poasando a este componente es la que tiene cada uno de los pokemon, que da un objeto con sus datos
    <div className="container-menu">
      {!pokemon ? (
        <h1>Cargando</h1>
      ) : (
        <div className={`${"container"} `}>
          <div className="id">
            <h2>#{pokemon.id}</h2>
          </div>
          <div className="img">
            <img src="" alt="pokemon" className="imgPokemon" />
          </div>
          <Modal show={show} handleClose={hideModal}>
            <Detalles pokemon />
          </Modal>
          <section className="name">
            <button className="more" onClick={showModal}>
              {pokemon.name}
            </button>
          </section>
        </div>
      )}
    </div>
  );
};
