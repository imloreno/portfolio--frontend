import ReferenceCard from "../reference_card";

const UDEMY_COURSES = [
  {
    img: "https://img-b.udemycdn.com/course/480x270/364022_bc05_3.jpg",
    url: "https://www.udemy.com/certificate/UC-3c60028d-f7cc-4da8-b15a-95cd5774ed4b/",
    title: "Todo HTML5 y CSS3, de novato a experto",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/1509816_dff8.jpg",
    url: "https://www.udemy.com/certificate/UC-bc69d42b-ad82-44b9-bb2a-993d9bb213a7/",
    title: "JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/1669982_6044_3.jpg",
    url: "https://www.udemy.com/certificate/UC-ZFT51DGE/",
    title: "Fundamentos de Programación Web para Principiantes",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/405926_02c8_2.jpg",
    url: "https://www.udemy.com/certificate/UC-PVID7SX8/",
    title: "HTML and CSS for Beginners - Build a Website & Launch ONLINE",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/749262_08d8_6.jpg",
    url: "https://www.udemy.com/certificate/UC-IS59MD2V/",
    title: "Curso de maquetación web de lo básico a lo avanzado",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/2257278_3320_8.jpg",
    url: "https://www.udemy.com/certificate/UC-cfa306c5-44e6-44f3-99bf-5934b41cb8a9/",
    title: "Crear Una Página Web Desde Cero con HTML y CSS",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/3339492_8fe4.jpg",
    url: "https://www.udemy.com/certificate/UC-2cd88ec4-afa9-43be-8364-d44ba7c79fe3/",
    title: "HTML & CSS - Certification Course for Beginners",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/2287845_27b3.jpg",
    url: "https://www.udemy.com/certificate/UC-60d3671e-c7ee-4eab-b217-5e3d781c8579/",
    title: "Introducción a PHP y creación de un CRUD básico",
  },
  {
    img: "https://img-b.udemycdn.com/course/480x270/2479484_e8e5.jpg",
    url: "https://www.udemy.com/certificate/UC-KRBBET90/",
    title: "Login y Registro de Usuarios con PHP y MySql",
  },
];

const UdemyScreen = () => {
  return (
    <section className="udemy">
      <p>
        I consider myself as a self-taught student, because almost everything
        that I apply in real life, I learned on my own, from programming
        fundamentals to software architecture.
      </p>
      <p>
        In{" "}
        <a
          href="https://www.udemy.com"
          target="_blank"
          rel="noreferrer"
          className="udemy_link"
        >
          UDEMY
        </a>{" "}
        you can find me as{" "}
        <a
          href="https://www.udemy.com/user/santy-arias/"
          target="_blank"
          rel="noreferrer"
          className="udemy_link"
        >
          Lorenzo Santiago Saul Arias Villegas
        </a>{" "}
        . To look my profile you must have an account, in this platform, I have
        the following certificates:
      </p>
      <ul className="udemy_list">
        {UDEMY_COURSES.map((course: any, index: number) => (
          <ReferenceCard {...course} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default UdemyScreen;
