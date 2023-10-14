import { HeaderSimplificado } from "../../components/Header";
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  const handleHomepage = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div className="wrapper animate">
      <HeaderSimplificado />
      <div className="box">
        A página especificada não foi encontrada.
        <button onClick={handleHomepage}>Voltar</button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
