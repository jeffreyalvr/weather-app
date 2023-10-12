import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";
import Erro from "../../components/Erro";
import Footer from "../../components/Footer";

const Home = () => {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState({});
  const [forecast, setForecast] = useState([]); // TEMPORARY: editar depois para
  // INFO: unidade: "metric" || "imperial"
  const [unidade, setUnidade] = useState(
    localStorage.getItem("unidade") || "metric"
  );
  const [modal, setModal] = useState({ estado: false, tipo: 1 });
  const [buscaAtiva, setBuscaAtiva] = useState(false);

  useEffect(() => {
    if (!buscaAtiva) return;
    handleBuscaCidade(texto);
  }, [unidade]);

  const handleFecharModal = () => {
    setModal({ estado: false });
  };

  const handleUnidade = (unidade) => {
    setUnidade(unidade);
    localStorage.setItem("unidade", unidade);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTexto(value);
  };

  const handleSubmit = () => {
    handleBuscaCidade(texto);
  };

  const handleBuscaCidade = (cidade) => {
    if (texto === "") return setModal({ estado: true, tipo: 1 });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${unidade}&lang=pt`
    )
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        setModal({ estado: false, tipo: 1 });
        setResultado(data);
        setBuscaAtiva(true);

        // TEMPORARY: remover depois, usado apenas para debug
        console.log(data);

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${
            data.coord.lat
          }&lon=${data.coord.lon}&appid=${
            import.meta.env.VITE_API_KEY
          }&cnt=15&units=${unidade}&lang=pt`
        )
          .then((forecast_response) => {
            if (forecast_response.ok) return forecast_response.json();
            return Promise.reject(forecast_response);
          })
          .then((forecast_data) => {
            setModal({ estado: false, tipo: 1 });
            setForecast(forecast_data.list);
          })
          .catch((err) => setModal({ estado: true, tipo: 2 }));
      })
      .catch((err) => setModal({ estado: true, tipo: 2 }));
  };

  return (
    <div className="wrapper animate">
      <Header
        texto={texto}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleBuscaCidade={handleBuscaCidade}
        unidade={unidade}
        handleUnidade={handleUnidade}
      />
      {modal.estado && (
        <Erro tipo={modal.tipo} handleFecharModal={handleFecharModal} />
      )}
      {resultado && forecast && !!Object.keys(resultado).length && (
        <Detalhes resultado={resultado} forecast={forecast} unidade={unidade} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
