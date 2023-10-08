import "./styles.css";

import { useState } from "react";

import warning_icon from "../../assets/icons/warning.png";

const Erro = () => {
  const [estadoModal, setEstadoModal] = useState(true);

  const handleFecharModal = () => {
    setEstadoModal(false);
  };

  return estadoModal ? (
    <div className="erro-container">
      <div className="erro-header">
        <img src={warning_icon} alt="Erro" title="Erro" />
      </div>
      <div className="erro-body">
        <span>Não foi possível realizar a busca.</span>
        <span>Tente novamente.</span>
      </div>
      <button
        className="erro-btn"
        title="Fechar"
        onClick={() => handleFecharModal}
      >
        Fechar
      </button>
    </div>
  ) : null;
};

export default Erro;
