import { MAIN_URL } from "consts/variables";
import Buttons from "components/common/buttons";
import Icons from "components/common/icons";
import Filter from "components/common/filter";

const Experience = () => {
  return (
    <section className="experience">
      <Filter />
      <header>
        <h1 className="title">Experiencia laboral.</h1>
      </header>
      <div className="experience__container">
        <div className="experience__button experience__button--prev">
          <Icons type="left" />
        </div>
        <div className="experience__item-container">
          <article className="experience__item">
            <div className="experience__image">
              <img
                src={MAIN_URL + "view/img/projects/cosmon.jpg"}
                alt="Cosmon"
              />
            </div>
            <div className="experience__data">
              <h2 className="experience__title subtitle">COSMON</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                porro neque quis modi vero autem perferendis mollitia nostrum,
                vel assumenda?
              </p>
              <Buttons text="Ver proyecto" type="default" />
            </div>
          </article>
        </div>
        <div className="experience__button experience__button--next">
          <Icons type="right" />
        </div>
      </div>
    </section>
  );
};
export default Experience;
