import "./styles.css";

import warning_icon from "../../assets/icons/warning.png";

const Erro = ({ tipo, handleFecharModal }) => {
  return (
    <div className="erro-container animate">
      <div className="erro-body">
        <img src={warning_icon} alt="Erro" title="Erro" />
        <div className="message">
          {tipo === 1 ? (
            <span>O campo de busca não pode ficar vazio.</span>
          ) : (
            <>
              <span>Ocorreu um erro ao se conectar ao OpenWeather.</span>
              <span>
                Verifique o campo de busca ou tente novamente mais tarde.
              </span>
            </>
          )}
        </div>
      </div>
      <button className="erro-btn" title="Fechar" onClick={handleFecharModal}>
        X
      </button>
    </div>
  );
};

export default Erro;
