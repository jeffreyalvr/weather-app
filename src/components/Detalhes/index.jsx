import "./styles.css";

import img_sunny from "../../assets/icons/sunny.png";
import img_rainning from "../../assets/icons/rainning.png";
import img_empty from "../../assets/icons/no-image.png";

const Detalhes = ({ overrideClass, resultado, forecast, unidade }) => {
  return (
    <div className={`detalhes animate ${overrideClass}`}>
      <div className="hoje">
        <div className="clima">
          <img src={img_empty} alt="" />
          <div className="temperatura">
            <span>
              {resultado.main.temp.toFixed() +
                ` º${unidade === "metric" ? "C" : "F"}`}
            </span>
            <p>{resultado.weather[0].description}</p>
          </div>
        </div>
        <div className="info">
          <span>Local</span>
          <p>
            {resultado.name}, {resultado.sys.country}
          </p>
        </div>
      </div>
      <div className="adicional">
        <h1>Próximas horas</h1>
        <div className="hourly-container">
          {forecast.map((hora, i) => {
            let horario = new Date(hora.dt_txt);
            return (
              <div className="hour-item" key={i}>
                <span>{horario.getHours() + ":00 h"}</span>
                <img src={img_empty} alt="" />
                <p>
                  {hora.main.temp_max.toFixed() +
                    ` º${unidade === "metric" ? "C" : "F"}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
