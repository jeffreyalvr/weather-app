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
        console.log(data);
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
      {resultado && !!Object.keys(resultado).length && (
        <Detalhes resultado={resultado} unidade={unidade} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
