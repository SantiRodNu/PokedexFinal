import "./modalNewCard.css";

const ModalNewCard = () => {
  return (
    <section className="contain">
      <div className="specs">
        <div className="title">
          <h1> ¡Crea tu Pókemon!</h1>
        </div>
        <div className="text">
          <p>Completa los campos y crea tu propio pókemon.</p>
        </div>
        <div className="name">
          <label>Ingresa su nombre</label>
          <input type="text" name="" id="name" />
        </div>
        <div className="loadImg">
          <label>Ingresa su imagen</label>
          <input type="file" name="imagen" id="img" placeholder="Nombre" />
        </div>
        <div className="types">
          <label>Ingresa su tipo</label>
          <input type="text" name="types" id="type" />
        </div>
        <div className="measurements">
          <label>Ingresa sus medidas</label>
          <input
            type="text"
            name="weight"
            id="weight"
            placeholder="Weight/gr"
          />
          <input
            type="text"
            name="height"
            id="height"
            placeholder="Height/cm"
          />
        </div>
        <div className="movement">
          <label>Ingresa sus movimientos</label>
          <input type="text" name="moves" id="moves" />
        </div>
        <div className="stats">
          <label>Ingresa sus estadísticas</label>
          <input type="text" name="baseStats" id="baseStats" placeholder="HP" />
          <input
            type="text"
            name="baseStats"
            id="baseStats"
            placeholder="ATK"
          />
          <input
            type="text"
            name="baseStats"
            id="baseStats"
            placeholder="DEF"
          />
          <input
            type="text"
            name="baseStats"
            id="baseStats"
            placeholder="SATK"
          />
          <input
            type="text"
            name="baseStats"
            id="baseStats"
            placeholder="SDEF"
          />
          <input
            type="text"
            name="baseStats"
            id="baseStats"
            placeholder="SPD"
          />
        </div>
        <div>
          <input type="submit" id="enviar" />
        </div>
      </div>
    </section>
  );
};
export default ModalNewCard;
