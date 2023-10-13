import "./styles.css";

import img_sunny from "../../assets/icons/sunny.png";
import img_rainning from "../../assets/icons/rainning.png";
import img_empty from "../../assets/icons/no-image.png";

const Detalhes = ({ resultadoAtual, resultadoHorarios, unidade }) => {
  return (
    <div className={`detalhes animate`}>
      <div className="hoje">
        <div className="clima">
          <img src={img_empty} alt="" />
          <div className="temperatura">
            <span>
              {resultadoAtual?.main?.temp.toFixed() +
                ` º${unidade === "metric" ? "C" : "F"}`}
            </span>
            <p>{resultadoAtual?.weather[0]?.description}</p>
          </div>
        </div>
        <div className="info">
          <span>Local aprox.</span>
          <p>
            {console.log(resultadoAtual)}
            {resultadoAtual?.name}, {resultadoAtual?.sys?.country}
          </p>
        </div>
      </div>
      <div className="adicional">
        <h1>Informações adicionais</h1>
        <div className="container">
          <span>
            Sensação:{" "}
            {resultadoAtual?.main?.feels_like.toFixed() +
              ` º${unidade === "metric" ? "C" : "F"}`}
          </span>
          <span>
            Máxima:{" "}
            {resultadoAtual?.main?.temp_max.toFixed() +
              ` º${unidade === "metric" ? "C" : "F"}`}
          </span>
          <span>
            Mínima:{" "}
            {resultadoAtual?.main?.temp_min.toFixed() +
              ` º${unidade === "metric" ? "C" : "F"}`}
          </span>
          <span>Vento direção: {resultadoAtual?.wind?.deg}</span>
          <span>Vento velocidade: {resultadoAtual?.wind?.speed}</span>
        </div>
      </div>
      <div className="adicional">
        <h1>Próximas horas</h1>
        <div className="hourly-container">
          {resultadoHorarios?.map((hora, i) => {
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
