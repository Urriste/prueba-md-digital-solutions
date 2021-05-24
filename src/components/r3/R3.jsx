import { useState } from "react";
import Video from "./img/video.mp4";
import PlayImg from "./img/boton-de-play.png";
import Modal from "./Modal";
import "./style/inciso3.css";

const R3 = () => {
  //con este estado controlamos la apertura o cierre del modal,
  //renderizandolo cuando "open" es true, y cerrandolo cuando "open" es false
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="container">
        <div className="video-container">
          <video id="video" onClick={handleClick} src={Video}></video>{" "}
          <button className="btn-play" onClick={handleClick}>
            <img src={PlayImg} alt="" />
          </button>
        </div>
        <div className="text-container">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam
            ut ratione est tempora vero quos!
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum
            debitis sequi libero tempora atque commodi a! Odit id nihil nostrum
            laboriosam dolor minima aut, cumque nisi facilis excepturi natus
            nemo, molestias placeat maxime sint.
          </p>

          {/*Gracias al condicional "open?" podemos comprobar
          si el modal esta o no cerrado, y que renderiza en cada momento.

          Lo que sigue luego del ? es lo que se renderiza si "open" es true, y lo que sigue
          a los : es lo que se renderizaria si esta cerrado
          */}
          {open ? (
            <Modal>
              {" "}
              <button
                className="btn-mod"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </button>
              <video className="video-modal" controls src={Video}></video>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default R3;
