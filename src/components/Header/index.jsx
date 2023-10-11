import "./styles.css";

import img_logo from "../../assets/images/logo.png";
import img_search from "../../assets/icons/search.png";

const Header = ({
  texto,
  handleSubmit,
  handleInputChange,
  handleBuscaCidade,
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
        <button onClick={handleSubmit}>
          <img src={img_search} alt="Botão de procurar" />
          <span>Procurar</span>
        </button>
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
