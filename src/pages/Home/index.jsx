import { useState } from "react";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";
import Footer from "../../components/Footer";

const Home = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <div className="wrapper">
      <Header text={text} handleInputChange={handleInputChange} />
      <Detalhes overrideClass="hidden" />
      <Footer />
    </div>
  );
};

export default Home;
