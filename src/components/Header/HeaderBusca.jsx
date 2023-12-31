import img_logo from "../../assets/images/logo.png";
import img_search from "../../assets/icons/search.png";
import img_localizacao from "../../assets/icons/localizacao.png";
import img_close from "../../assets/icons/close.png";

const HeaderBusca = ({
  texto,
  handleSubmit,
  handleInputChange,
  handleObterClima,
  unidade,
  handleUnidade,
  handleLocalizacao,
  cidades,
  exibirListagem,
  handleClearSearch,
}) => {
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
            className="invert"
            src={img_localizacao}
            alt="Ícone de localização"
          />
          <button className="label-btn" onClick={handleLocalizacao}>
            Usar localização atual
          </button>
        </div>
        {texto && (
          <div className="item">
            <button
              className="search-tag"
              onClick={handleClearSearch}
              title="Remover a busca atual"
            >
              {texto}
              <img src={img_close} alt="Ícone de fechar" />
            </button>
          </div>
        )}
      </div>
      {cidades && exibirListagem ? (
        <div className="listagem">
          <div className="cidades">
            {cidades.map((cidade, i) => (
              <div
                className="item"
                key={i}
                onClick={() =>
                  handleObterClima({
                    lat: cidade.lat,
                    lon: cidade.lon,
                  })
                }
              >
                {cidade.name +
                  ", " +
                  (cidade.state !== undefined ? cidade.state + ", " : "") +
                  cidade.country}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default HeaderBusca;
