import Modal from "../Card/Modal";
import "./loginButton.css";
import { useState } from "react";
import ModalNewCard from "./ModalLogin";

export const LoginButton = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const [classModal, setClassModal] = useState(false);
  const changeClassName = () => {
    setClassModal(true);
  };

  return (
    <div className="loginContainer">
      
        <Modal show={show} handleClose={hideModal} classModal={classModal}>
          <ModalNewCard />
        </Modal>
        <section className="name">
          <button className="button-29" onClick= { () => {showModal(); changeClassName();}}>
            Login
          </button>
        </section>
      </div>
    
  );
};
