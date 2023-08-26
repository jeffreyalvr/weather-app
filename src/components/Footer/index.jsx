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
      <p className="disclaimer">
        Informações buscadas através da API pública{" "}
        <a href="#">a ser decidida</a>.
      </p>
    </footer>
  );
};

export default Footer;
