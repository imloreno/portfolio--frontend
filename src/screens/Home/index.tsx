import Profile from "assets/profile.jpg";
import Buttons from "components/common/buttons";
import langPick from "consts/lang";
import { useSelector } from "react-redux";
import HomeArticle from "./HomeArticle";

const Home = (props: { isLoading?: boolean }): JSX.Element => {
  const store = useSelector((store: any) => store.language);

  const {
    home: { about, header },
  } = langPick(store.lang || "en");

  return (
    <section
      className={`container open-animation scroll ${
        props.isLoading && "change-animation"
      }`}
    >
      <header className="container__header">
        <h1 className="title container__title">{header.title}</h1>
        <p className="container__subtitle">{header.subtitle}</p>
      </header>
      <div className="container__profile container__box">
        <div className="container-profile-photo">
          <img src={Profile} alt="Lorenzo Arias Villegas" />
        </div>
        <div title={about.title} className="container__data container__box">
          <div className="container__personaldata">
            {!!about.personaldata &&
              about.personaldata.map((data: any, index: number) => (
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
        <h2 className="subtitle container__introduction-title">
          {about.title}
        </h2>
        {about.paragraph.length > 0 &&
          about.paragraph.map((data: string, index: number) => (
            <p className="container__paragraph" key={index}>
              {data}
            </p>
          ))}

        <a
          href="https://api.soylorenzo.tk/view/assets/portfolio.pdf"
          rel="noreferrer"
          target="_blank"
        >
          <Buttons
            type="default"
            text={about.button}
            className="container__button"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
