import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <span>
        <a
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
        >
          @jeffreyalvr
        </a>
      </span>
      <p>
        Informações buscadas através da API pública{" "}
        <a
          href="https://openweathermap.org/weather-dashboard/dashboard-documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeather API
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
