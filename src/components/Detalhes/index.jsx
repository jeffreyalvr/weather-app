import "./styles.css";

import img_info from "../../assets/icons/info.png";
import img_wind from "../../assets/icons/wind.png";
import img_sensation from "../../assets/icons/sensation.png";
import img_temp_max from "../../assets/icons/temp_max.png";
import img_temp_min from "../../assets/icons/temp_min.png";
import img_humidity_per from "../../assets/icons/humidity_per.png";
import img_pressure from "../../assets/icons/pressure.png";
import img_clouds from "../../assets/icons/clouds.png";

const Detalhes = ({ resultadoAtual, resultadoHorarios, unidade }) => {
  return (
    <div className={`detalhes animate`}>
      <div className="hoje">
        <div className="clima">
          <img
            src={`https://openweathermap.org/img/wn/${resultadoAtual?.weather[0]?.icon}@2x.png`}
            alt="Ícone do clima atual"
          />
          <div className="temperatura">
            <span>
              {resultadoAtual?.main?.temp.toFixed() +
                ` º${unidade === "metric" ? "C" : "F"}`}
            </span>
            <p>{resultadoAtual?.weather[0]?.description}</p>
          </div>
        </div>
        <div className="info">
          <span title="Alguns locais podem retornar medições em pontos específicos da cidade.">
            Local aprox.{" "}
            <img src={img_info} className="invert" alt="Ícone de informação" />
          </span>
          <p>
            {resultadoAtual?.name}, {resultadoAtual?.sys?.country}
          </p>
        </div>
      </div>
      <div className="adicional">
        <h1>Informações adicionais</h1>
        <div className="container">
          <div className="card">
            <img src={img_sensation} alt="Ícone de sensação térmica" />
            Sensação:{" "}
            {resultadoAtual?.main?.feels_like.toFixed() +
              ` º${unidade === "metric" ? "C" : "F"}`}
          </div>
          <div className="card">
            <img src={img_temp_max} alt="Ícone de temperatura máxima" />
            Máxima atual:{" "}
            {resultadoAtual?.main?.temp_max.toFixed() +
              ` º${unidade === "metric" ? "C" : "F"}`}
          </div>
          <div className="card">
            <img src={img_temp_min} alt="Ícone de temperatura mínima" />
            Mínima atual:{" "}
            {resultadoAtual?.main?.temp_min.toFixed() +
              ` º${unidade === "metric" ? "C" : "F"}`}
          </div>
          <div className="card">
            <img src={img_humidity_per} alt="Ícone de umidade" />
            Umidade: {resultadoAtual?.main?.humidity}%
          </div>
          <div className="card">
            <img src={img_pressure} alt="Ícone de pressão atmosférica" />
            Pressão: {resultadoAtual?.main?.pressure} hPa
          </div>
          <div className="card">
            <img src={img_clouds} alt="Ícone de cobertura das nuvens" />
            Cobertura das nuvens: {resultadoAtual?.clouds.all}%
          </div>
          <div className="card">
            <img src={img_wind} alt="Ícone de direção do vento" />
            <div className="card-col">
              <span>Direção do vento: {resultadoAtual?.wind?.deg}º</span>
              <span>
                Velocidade: {resultadoAtual?.wind?.speed?.toFixed(1)}{" "}
                {unidade === "metric" ? "m/s" : "mi/h"}
              </span>
            </div>
          </div>
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
                <img
                  src={`https://openweathermap.org/img/wn/${resultadoHorarios[i]?.weather[0]?.icon}@2x.png`}
                  alt="Ícone do clima atual"
                />
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
