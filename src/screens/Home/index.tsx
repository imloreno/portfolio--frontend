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

const Home = (): JSX.Element => {
  return (
    <section className="container">
      <div className="container__introduction container__box">
        <header>
          <h1 className="title">Hola! soy Lorenzo.</h1>
        </header>
        <p>
          Bienvenido/a seas, mi nombre es Lorenzo Arias Villegas, tengo 23 años,
          soy un desarrollador web cuya especialidad es el Frontend, me
          considero Frontend desde hace 2 años. <br />
          Mi pasión es el desarrollo web, mi objetivo es profundizar mis
          conocimientos hasta alcanzar el rango de senior o más de ser posible.
        </p>
        <Buttons
          type="default"
          text="Descargar currículum"
          className="container__button"
        />
      </div>
      <div className="container__profile container__box">
        <img src={Profile} alt="Lorenzo Arias Villegas" />
      </div>
      <div title="Datos personales" className="container__data container__box">
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
    </section>
  );
};

export default Home;
