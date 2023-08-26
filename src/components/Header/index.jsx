import "./styles.css";

import img_logo from "../../assets/images/logo.png";
import img_search from "../../assets/icons/search.png";

const Header = ({ text, handleInputChange }) => {
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
        <button>
          <img src={img_search} />
          <span>Procurar</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
