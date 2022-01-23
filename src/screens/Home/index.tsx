import Profile from "assets/profile.jpg";
import Buttons from "components/common/buttons";
import HomeArticle from "./HomeArticle";

const PERSONAL_DATA = [
  {
    title: "Nombre completo",
    text: "Lorenzo Santiago Saúl Arias Villegas",
  },
  {
    title: "Fecha de nacimiento",
    text: "12 / Marzo / 1998",
  },
  {
    title: "Dirección",
    text: "Calle florida esquina Angel Sandoval",
  },
  {
    title: "Nacionalidad",
    text: "Bolivia",
  },
];

const Home = (props: { isLoading?: boolean }): JSX.Element => {
  return (
    <section
      className={`container open-animation ${
        props.isLoading && "change-animation"
      }`}
    >
      <header className="container__header">
        <h1 className="title container__title">Lorenzo Arias Villegas.</h1>
        <p className="container__subtitle">Portafolio personal</p>
      </header>
      <div className="container__profile container__box">
        <div className="container-profile-photo">
          <img src={Profile} alt="Lorenzo Arias Villegas" />
        </div>
        <div
          title="Datos personales"
          className="container__data container__box"
        >
          <div className="container__personaldata">
            {PERSONAL_DATA.map((data: any, index: number) => (
              <HomeArticle
                key={index}
                title={data.title}
                text={data.text}
                className="personaldata__item"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container__introduction container__box">
        <h2 className="subtitle container__introduction-title">Sobre mí</h2>
        <p className="container__paragraph">
          Mi nombre es Lorenzo Arias Villegas, tengo 23 años, soy un
          desarrollador web especializado en frontend hace más de 2 años. <br />
          Mi pasión es el desarrollo web, y mi objetivo, profundizar mis
          conocimientos para alcanzar el rango de senior o más de ser posible.
        </p>
        <a
          href="https://api.soylorenzo.tk/view/assets/portfolio.pdf"
          rel="noreferrer"
          target="_blank"
        >
          <Buttons
            type="default"
            text="Descargar currículum"
            className="container__button"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
