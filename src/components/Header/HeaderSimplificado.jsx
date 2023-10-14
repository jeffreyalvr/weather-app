import img_logo from "../../assets/images/logo.png";

const HeaderSimplificado = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={img_logo} alt="Logo do Weather App" />
        <span>Weather App</span>
      </div>
    </header>
  );
};

export default HeaderSimplificado;
