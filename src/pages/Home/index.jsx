import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";
import Erro from "../../components/Erro";
import Footer from "../../components/Footer";

const Home = () => {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState({});
  // INFO: unidade: "metric" || "imperial"
  const [unidade, setUnidade] = useState(
    localStorage.getItem("unidade") || "metric"
  );
  const [modal, setModal] = useState({ estado: false, tipo: 1 });
  const [buscaAtiva, setBuscaAtiva] = useState(false);
  const [exibirListagem, setExibirListagem] = useState(false);

  useEffect(() => {
    if (!buscaAtiva) return;
    handleObterClima({ cidade: texto });
  }, [unidade]);

  const handleFecharModal = () => {
    setModal({ estado: false });
  };

  const handleUnidade = (unidade) => {
    setUnidade(unidade);
    localStorage.setItem("unidade", unidade);
  };

  const handleInputChange = (e) => {
    const valor = e.target.value;
    setTexto(valor);
  };

  const handleSubmit = () => {
    if (handleValidarTexto(texto)) return setModal({ estado: true, tipo: 1 });
    handleBuscarCidade(texto);
  };

  /**
   * Verifica se a string especificada possui apenas caracteres especiais e números.
   * @param {string} texto
   * @returns {boolean}
   */
  const handleValidarTexto = (texto) => {
    return /^[ '-\d]+$/.test(texto) || texto === "";
  };

  /**
   * Recebe um objeto e um array de strings para verificar se o mesmo as possui como chaves.
   * Retorna [true] ou [false] na totalidade.
   * @param {object} objeto
   * @param  {...String} propriedades
   * @returns {boolean}
   */
  const temChaves = (objeto, ...propriedades) => {
    return propriedades.every((propriedade) =>
      objeto.hasOwnProperty(propriedade)
    );
  };

  const handleLocalizacao = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      handleObterClima({ lat: latitude, lon: longitude });
    });
  };

  /**
   * Retorna a lista de cidades com o nome semelhante ao da busca.
   * @param {string} cidade
   * @returns {object[]}
   */
  const handleBuscarCidade = (cidade) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&appid=${
        import.meta.env.VITE_API_KEY
      }&limit=5&lang=pt`
    )
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((dados) => {
        setModal({ estado: false, tipo: 1 });
        setResultado((prevState) => ({
          ...prevState,
          cidades: dados,
        }));
        setBuscaAtiva(true);
        if (Object.keys(dados).length <= 0)
          return setModal({ estado: true, tipo: 3 });
        setExibirListagem(true);
      })
      .catch((err) => setModal({ estado: true, tipo: 2 }));
  };

  /**
   * Retorna os detalhes do clima da cidade buscada com base no nome ou latitude e longitude.
   * @param {string} cidade
   * @param {string} lat
   * @param {string} lon
   * @returns {object}
   */
  const handleObterClima = ({ cidade, lat, lon }) => {
    setExibirListagem(false);

    if (!{ lat, lon } && texto === "")
      return setModal({ estado: true, tipo: 1 });

    let prefix = cidade ? `q=${cidade}` : `lat=${lat}&lon=${lon}`;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?${prefix}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${unidade}&lang=pt`
    )
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((dados) => {
        setModal({ estado: false, tipo: 1 });
        setTexto(dados.name);
        setResultado((prevState) => ({
          ...prevState,
          atual: dados,
        }));
        setBuscaAtiva(true);
        handleObterClimaPorHorarios(dados);
      })
      .catch((err) => setModal({ estado: true, tipo: 2 }));
  };

  /**
   * Retorna os detalhes com base em horários da cidade buscada.
   * Necessita dos dados do response dos detalhes da cidade.
   * @param {object} dados
   * @returns {object[]}
   */
  const handleObterClimaPorHorarios = (dados) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        dados.coord.lat
      }&lon=${dados.coord.lon}&appid=${
        import.meta.env.VITE_API_KEY
      }&cnt=15&units=${unidade}&lang=pt`
    )
      .then((forecast_response) => {
        if (forecast_response.ok) return forecast_response.json();
        return Promise.reject(forecast_response);
      })
      .then((forecast_dados) => {
        setModal({ estado: false, tipo: 1 });
        setResultado((prevState) => ({
          ...prevState,
          horarios: forecast_dados.list,
        }));
      })
      .catch((err) => setModal({ estado: true, tipo: 2 }));
  };

  return (
    <div className="wrapper animate">
      <Header
        texto={texto}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleObterClima={handleObterClima}
        unidade={unidade}
        handleUnidade={handleUnidade}
        handleLocalizacao={handleLocalizacao}
        cidades={resultado.cidades}
        exibirListagem={exibirListagem}
      />
      {modal.estado && (
        <Erro tipo={modal.tipo} handleFecharModal={handleFecharModal} />
      )}
      {temChaves(resultado, "atual", "horarios") && (
        <Detalhes
          resultadoAtual={resultado.atual}
          resultadoHorarios={resultado.horarios}
          unidade={unidade}
        />
      )}
      <Footer />
    </div>
  );
};

export default Home;
