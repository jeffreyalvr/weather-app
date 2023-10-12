import "./styles.css";

import img_logo from "../../assets/images/logo.png";
import img_search from "../../assets/icons/search.png";
import img_localizacao from "../../assets/icons/localizacao.png";

const Header = ({
  texto,
  handleSubmit,
  handleInputChange,
  handleBuscaCidade,
  unidade,
  handleUnidade,
}) => {
  const cidades_placeholder = [
    "João Pessoa",
    "Johannesburg",
    "Jodhpur",
    "Johor Bahru",
    "Jos",
  ];

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) handleSubmit();
  };

  return (
    <header>
      <div className="logo-container">
        <img src={img_logo} alt="Logo do Weather App" />
        <span>Weather App</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={texto}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Procure uma cidade..."
        />
        <div className="right-container">
          <button onClick={handleSubmit}>
            <img src={img_search} alt="Botão de procurar" />
            <span>Procurar</span>
          </button>
          <div className="unidade-container">
            <div
              className={`unidade ${unidade === "imperial" && "ativo"}`}
              title="Usar sistema imperial"
              onClick={() => handleUnidade("imperial")}
            >
              ºF
            </div>
            <div
              className={`unidade ${unidade === "metric" && "ativo"}`}
              title="Usar sistema métrico"
              onClick={() => handleUnidade("metric")}
            >
              ºC
            </div>
          </div>
        </div>
      </div>
      <div className="under-links">
        <div className="item">
          <img
            class="invert"
            src={img_localizacao}
            alt="Ícone de localização"
          />
          <a href="#">Usar localização atual</a>
        </div>
      </div>
      <div className="listagem hidden">
        <div className="cidades">
          {cidades_placeholder.map((cidade, i) => (
            <div
              className="item"
              key={i}
              onClick={() => handleBuscaCidade(cidade)}
            >
              {cidade}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
