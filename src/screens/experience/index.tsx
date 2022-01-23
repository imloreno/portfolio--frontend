import { MAIN_URL } from "consts/variables";
import Icons from "components/common/icons";
import Filter from "components/common/filter";
import { useGetExperience } from "components/hooks/experience";
import ProjectArticle from "./projectArticle";
import usePagination from "components/hooks/experience/usePagination";

const Experience = (props: { isLoading?: boolean }) => {
  const { experience } = useGetExperience();
  const { numPag, handlePrev, handleNext, handleSet } = usePagination(
    experience.length
  );

  return (
    <section
      className={`experience open-animation ${
        props.isLoading && "change-animation"
      }`}
    >
      <Filter />
      <header>
        <h1 className="title experience-header__title">Experiencia laboral.</h1>
      </header>
      <div className="experience__container">
        <div
          className="experience__button experience__button--prev"
          onClick={handlePrev}
        >
          <Icons type="left" />
        </div>
        <div className="experience__item-container">
          {experience.map((item: any, index: number) => (
            <ProjectArticle
              key={index}
              className={numPag === index ? "experience__item--active" : ""}
              img={MAIN_URL + item.img}
              title={item.title}
              paragraph={item.description}
              tasks={item.tasks}
              reference={item.reference}
              onClick={() => handleSet(index)}
            />
          ))}
        </div>
        <div
          className="experience__button experience__button--next"
          onClick={handleNext}
        >
          <Icons type="right" />
        </div>
      </div>
    </section>
  );
};
export default Experience;
