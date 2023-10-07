import "./styles.css";

import { useState } from "react";

import img_logo from "../../assets/images/logo.png";
import img_search from "../../assets/icons/search.png";

const Header = ({ text, handleInputChange }) => {
  const cidades_placeholder = [
    "João Pessoa",
    "Johannesburg",
    "Jodhpur",
    "Johor Bahru",
    "Jos",
  ];

  const [dados, setDados] = useState({});

  const handleCidade = (cidade) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <header>
      <div className="logo-container">
        <img src={img_logo} />
        <span>Weather App</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Procure uma cidade..."
        />
        <button onClick={() => handleCidade(text.toLowerCase())}>
          <img src={img_search} />
          <span>Procurar</span>
        </button>
      </div>
      <div className="listagem hidden">
        <div className="cidades">
          {cidades_placeholder.map((cidade, i) => (
            <div
              className="item"
              key={i}
              onClick={() => handleCidade(cidade.toLowerCase())}
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
