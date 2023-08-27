import "./styles.css";

import img_sunny from "../../assets/icons/sunny.png";
import img_rainning from "../../assets/icons/rainning.png";
import img_empty from "../../assets/icons/no-image.png";

const Listagem = () => {
  return (
    <div className="listagem">
      <div className="hoje">
        <div className="clima">
          <img src={img_empty} alt="" />
          <div className="temperatura">
            <span>(vazio)</span>
            <p>status</p>
          </div>
        </div>
        <div className="detalhes">
          <span>DIA</span>
          <p>cidade, estado</p>
        </div>
      </div>
      <div className="adicional">
        <h1>Próximos 7 dias</h1>
        <div className="days-container">
          <div className="day-item">
            <span>SEG</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
          <div className="day-item">
            <span>TER</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
          <div className="day-item">
            <span>QUA</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
          <div className="day-item">
            <span>QUI</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
          <div className="day-item">
            <span>SEX</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
          <div className="day-item">
            <span>SÁB</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
          <div className="day-item">
            <span>DOM</span>
            <img src={img_empty} alt="" />
            <p>(vazio)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listagem;
