import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";
import Erro from "../../components/Erro";
import Footer from "../../components/Footer";

const Home = () => {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState({});
  // INFO: unidade: "metric" || "imperial"
  const [unidade, setUnidade] = useState("metric");
  const [modal, setModal] = useState({ estado: false, tipo: 1 });

  const handleFecharModal = () => {
    setModal({ estado: false });
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
      }&units=${unidade}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        setModal({ estado: false, tipo: 1 });
        setResultado(data);
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
      />
      {modal.estado && (
        <Erro tipo={modal.tipo} handleFecharModal={handleFecharModal} />
      )}
      {resultado && !!Object.keys(resultado).length && (
        <Detalhes resultado={resultado} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
