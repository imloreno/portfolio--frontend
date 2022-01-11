import Menu from "components/layout/Menu";
import Profile from "assets/profile.jpg";
import Buttons from "components/common/Buttons";

const Index = (): JSX.Element => {
  return (
    <div className="all-container">
      <Menu />
      <section className="container">
        <article className="container__introduction container__box">
          <header>
            <h1 className="title">Hola! soy Lorenzo.</h1>
          </header>
          <p>
            Bienvenido/a seas, mi nombre es Lorenzo Arias Villegas, tengo 23
            años, soy un desarrollador web cuya especialidad es el Frontend, me
            considero Frontend desde hace 2 años. <br />
            Mi pasión es el desarrollo web, mi objetivo es profundizar mis
            conocimientos hasta alcanzar el rango de senior o más de ser
            posible.
          </p>
          <Buttons
            type="default"
            text="Descargar currículum"
            className="container__button"
          />
        </article>
        <article className="container__profile container__box">
          <img src={Profile} alt="Lorenzo Arias Villegas" />
        </article>
        <article className="container__data container__box">
          <header>
            <h2 className="title">Datos personales</h2>
          </header>
        </article>
      </section>
    </div>
  );
};

export default Index;
