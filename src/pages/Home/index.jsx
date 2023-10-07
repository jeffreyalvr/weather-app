import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";
import Footer from "../../components/Footer";

const Home = () => {
  const [texto, setTexto] = useState("");
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState({});
  // INFO: unidade: "metric" || "imperial"
  const [unidade, setUnidade] = useState("metric");

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
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${unidade}`
    )
      .then((response) => response.json())
      .then((data) => setResultado(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="wrapper">
      <Header
        texto={texto}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleBuscaCidade={handleBuscaCidade}
      />
      {resultado !== null && <Detalhes resultado={resultado} />}
      <Footer />
    </div>
  );
};

export default Home;
