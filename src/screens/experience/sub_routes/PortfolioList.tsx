import { useSelector, useDispatch } from "react-redux";
import type { Work } from "typescript/work";
import WorkArticle from "components/common/work_article";

const portfolioList = [
  {
    title: "Sistema de gestion del clima",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta deleniti praesentium nulla. Expedita facere nobis labore, voluptatum deleniti sequi?",
    img: "",
    reference: [
      {
        type: "github",
        url: "",
      },
    ],
    tasks: [
      "Desarrollar un sistema de gestión del clima",
      "Desarrollar un sistema de gestión del clima",
      "Desarrollar un sistema de gestión del clima",
    ],
  },
  {
    title: "Sistema de gestion de tareas",
    description:
      "Architecto dicta deleniti praesentium nulla. Expedita facere nobis labore, voluptatum deleniti sequi?",
    img: "",
    reference: [
      {
        type: "web",
        url: "",
      },
    ],
    tasks: [
      "Desarrollar un sistema de gestión de tareas",
      "Desarrollar un sistema de gestión de tareas",
      "Desarrollar un sistema de gestión de tareas",
    ],
  },
];

const PortfolioList = () => {
  return (
    <>
      {portfolioList.map((item: Work, index: number) => (
        <WorkArticle {...item} key={index} />
      ))}
    </>
  );
};

export default PortfolioList;
