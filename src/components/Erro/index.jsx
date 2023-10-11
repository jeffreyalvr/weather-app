import "./styles.css";

import warning_icon from "../../assets/icons/warning.png";

const Erro = ({ tipo, handleFecharModal }) => {
  return (
    <div className="erro-container">
      <div className="erro-body">
        <img src={warning_icon} alt="Erro" title="Erro" />
        <span>
          {tipo === 1
            ? "O campo de busca não pode ficar vazio."
            : "Ocorreu um erro ao se conectar ao OpenWeather."}
        </span>
      </div>
      <button className="erro-btn" title="Fechar" onClick={handleFecharModal}>
        X
      </button>
    </div>
  );
};

export default Erro;
