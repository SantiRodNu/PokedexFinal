import "./modalLogin.css";
import Arrow from"../../Img/arrow-left.svg"

const ModalLogin = () => {
  return (

    <section className="containLogin">
      <div className="specs">
        
        <button className="botonFlecha">
        <img src={Arrow} alt="" className="flechaCerrar"/>
        </button>
        

        <div className="title">
          <h1> Accede a tu cuenta </h1>
        </div>
        
        <div className="name">
          <label>Nombre</label>
          <input type="text" name="" id="name" />
        </div>
          <div className="types">
          <label>Email</label>
          <input type="text" name="types" id="type" />
        </div>
        
        <div className="movement">
          <label>Contraseña</label>
          <input type="text" name="moves" id="moves" />
        </div>
        
        <div>
          <input className="botonEnviarLogin" type="submit" id="enviar" />
        </div>
      </div>
    </section>
  );
};
export default ModalLogin;
