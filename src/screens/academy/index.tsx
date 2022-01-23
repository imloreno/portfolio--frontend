import ArticleAcademy from "./ArticleAcademy";

const Academy = (props: { isLoading?: boolean }) => {
  return (
    <section
      className={`academy scroll open-animation ${
        props.isLoading && "change-animation"
      }`}
    >
      <header>
        <h1 className="title academy__title">Formación académica.</h1>
      </header>
      <div className="academy__container">
        <div className="academy__area_a">
          <ArticleAcademy
            title="Secundaria"
            subtitle="General Agustín Saavedra"
            className="academy__item"
          >
            <p className="academy__item-title">2010 - 2015</p>
            <p>
              Durante esta época, aprendí acerca de diseño usando herramientas
              como Photoshop
            </p>
          </ArticleAcademy>
          <ArticleAcademy
            title="Grado en Ingeniería de Sistemas"
            subtitle="Universidad Autónoma Gabriel René Moreno"
            className="academy__item"
          >
            <p className="academy__item-title">2016 - "2020"</p>
            <p>A un año de terminar la carrera</p>
            <p>
              Lo más relevante que aprendí durante esta época fue PHP, con
              programación orientada a objetos (POO), manejo de datos, patrones
              de arquitectura, lenguaje SQL, y fundamentos de programación.
            </p>
          </ArticleAcademy>
        </div>
        <div className="academy__area_b">
          <ArticleAcademy
            title="Autodidacta"
            subtitle="Cursos en línea y documentación oficial"
            className="academy__item"
          >
            <p className="academy__item-title">UDEMY</p>
            <p className="academy__item-subtitle">
              En UDEMY me puedes encontrar como:{" "}
              <a
                href="https://www.udemy.com/user/santy-arias/"
                rel="noreferrer"
                target="_blank"
                className="link-a academy__item-link"
              >
                Lorenzo Santiago Saúl Arias Villegas
              </a>
              , en esta plataforma, tengo las siguientes certificaciones:
            </p>
            <ul className="academy__certification-list">
              <a
                href="https://www.udemy.com/certificate/UC-ZFT51DGE/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Fundamentos de Programación Web para Principiantes</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-PVID7SX8/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>
                  HTML and CSS for Beginners - Build a Website & Launch ONLINE
                </li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-IS59MD2V/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Curso de maquetación web de lo básico a lo avanzado</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-cfa306c5-44e6-44f3-99bf-5934b41cb8a9/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Crear Una Página Web Desde Cero con HTML y CSS</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-2cd88ec4-afa9-43be-8364-d44ba7c79fe3/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>HTML & CSS - Certification Course for Beginners</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-3c60028d-f7cc-4da8-b15a-95cd5774ed4b/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Todo HTML5 y CSS3, de novato a experto</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-bc69d42b-ad82-44b9-bb2a-993d9bb213a7/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>
                  JavaScript Moderno Guía Definitiva Construye +15 Proyectos
                </li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-60d3671e-c7ee-4eab-b217-5e3d781c8579/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Introducción a PHP y creación de un CRUD básico</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-KRBBET90/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Login y Registro de Usuarios con PHP y MySql</li>
              </a>
            </ul>
            <p className="academy__item-title">YouTube</p>
            <p>
              Hay muchos cursos bastante completos recomendados por la comunidad
            </p>
            <ul className="academy__certification-list">
              <a
                href="https://www.youtube.com/watch?v=MPLN1ahXgcs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>John Mircha - Curso completo de React Js</li>
              </a>
              <a
                href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>John Mircha - Curso completo de Javascript</li>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-KRBBET90/"
                rel="noreferrer"
                target="_blank"
                className="link-a"
              >
                <li>Login y Registro de Usuarios con PHP y MySql</li>
              </a>
              <li>Y muchos más...</li>
            </ul>
          </ArticleAcademy>
        </div>
      </div>
    </section>
  );
};

export default Academy;
