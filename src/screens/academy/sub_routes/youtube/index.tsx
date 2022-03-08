import ReferenceCard from "../reference_card";

const YOUTUBE_COURSES = [
  {
    img: "https://i.ytimg.com/vi/Hz-RQ90xlpE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLV6FxCG2YawSMDpsgV6ROb6ddKg",
    url: "https://www.youtube.com/watch?v=MPLN1ahXgcs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk",
    title: "Curso completo de React.Js - jonmircha",
  },
  {
    img: "https://i.ytimg.com/vi/2SetvwBV-SU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDfTuHoZVNwk4TTk-aekyHdo3cw2w",
    url: "https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA",
    title: "Curso completo de JavaScript - jonmircha",
  },
  {
    img: "https://i.ytimg.com/vi/xOinGb2MZSk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGFY3wA7nKzdGxY5pBhlJARxgIcg",
    url: "https://www.youtube.com/watch?v=xOinGb2MZSk",
    title:
      "Curso de Javascript desde CERO (Completo) Nivel MID LEVEL - Lucas Dalto",
  },
  {
    img: "https://i.ytimg.com/vi/zIY87vU33aA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe1dbi5zCdasDTuQWvv39cjFHXqw",
    url: "https://www.youtube.com/watch?v=zIY87vU33aA",
    title: "Reactjs, Curso Práctico para Principiantes (React 16) - Fazt",
  },
  {
    img: "https://i.ytimg.com/vi/GQPcX0bQfMg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpOQogeJmmvTmg0fYF6QbyCbEaew",
    url: "https://www.youtube.com/playlist?list=PLvRPaExkZHFnbePm-JB6wNX7Xl-HDXLmz",
    title:
      "Curso Typescript 2021 Completo de Cero a Experto - Vida MRR Diseño y desarrollo web",
  },
  {
    img: "https://i.ytimg.com/vi/-Cp_jact8OM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB9guPiPyTryOBpshP524lFctNDLQ",
    url: "https://www.youtube.com/watch?v=-Cp_jact8OM&list=PL_7HoiqMMaOcdw15tKlcBEwpWYllZ-Ekf",
    title: "Curso de Typescript (2021) - Webtoriales",
  },
  {
    img: "https://i.ytimg.com/vi/yFAIMEupsuo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCpfwYGhpuCH_R312wBaIxSNe-UtQ",
    url: "https://www.youtube.com/watch?v=yFAIMEupsuo&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo",
    title: "Curso de ReactJS - Raul Palacions",
  },
  {
    img: "https://media.istockphoto.com/vectors/cross-plus-medical-icon-design-template-elements-vector-id487552824?k=20&m=487552824&s=612x612&w=0&h=T3950mjx0rhrsCHi40UESJCPwiClT51n0TromopWiJg=",
    url: "https://www.youtube.com",
    title: "So much more",
  },
];

const YouTubeScreen = () => {
  return (
    <div className="youtube">
      <p>
        There are a lot of courses in YouTube about programming, especially of
        web development.
      </p>
      <p>
        I'm a person of limited economic resources, for this reason, YouTube is
        one of my best references.
      </p>
      <p>
        I've find some really good courses recommended by the community such as:
      </p>
      <ul className="youtube_list">
        {YOUTUBE_COURSES.map((course: any, index: number) => (
          <ReferenceCard {...course} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default YouTubeScreen;
