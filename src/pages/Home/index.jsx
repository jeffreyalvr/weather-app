import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";
import Erro from "../../components/Erro";
import Footer from "../../components/Footer";

const Home = () => {
  const [texto, setTexto] = useState("");
  const [busca, setBusca] = useState(null);
  const [resultado, setResultado] = useState({});
  // INFO: unidade: "metric" || "imperial"
  const [unidade, setUnidade] = useState("metric");
  const [erro, setErro] = useState({ status: false, tipo: 1 });

  useEffect(() => {
    handleBuscaCidade(busca);
  }, [busca]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTexto(value);
  };

  const handleSubmit = () => {
    setBusca(texto);
  };

  const handleBuscaCidade = (cidade) => {
    if (busca === "") return setErro({ status: true, tipo: 1 });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${unidade}`
    )
      .then((response) => response.json())
      .then((data) => {
        setErro({ status: false, tipo: 1 });
        setResultado(data);
      })
      .catch((err) => setErro({ status: true, tipo: 2 }));
  };

  return (
    <div className="wrapper">
      <Header
        texto={texto}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleBuscaCidade={handleBuscaCidade}
      />
      {erro.status && <Erro tipo={erro.tipo} />}
      {Object.keys(resultado).length > 0 && <Detalhes resultado={resultado} />}
      <Footer />
    </div>
  );
};

export default Home;
