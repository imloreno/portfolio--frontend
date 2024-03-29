import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLogos } from "scripts/getLogos";
import langPick from "consts/lang";
import Logos from "screen/Skills/Logos";

const Skills = (props: { isLoading?: boolean }) => {
  //Get language from Redux
  const store = useSelector((store: any) => store.language.lang);
  const { skills } = langPick(store || "en");

  const [data, setData] = useState([]);

  useEffect(() => {
    getLogos({ callback: (e) => setData(e) });
  }, []);

  return (
    <section
      className={`skills open-animation scroll ${
        props.isLoading && "change-animation"
      }`}
    >
      <header className="skills__header">
        <h1 className="title">{skills.title}.</h1>
      </header>

      <div className="skills__item-list scroll">
        {data &&
          data.map((item: any, index: number) => (
            <article className="skills__item" key={index}>
              <p className="skills__item-title">{item.title}</p>
              <p className="skills__item-habilities">
                {item.habilities.map(
                  (e: string, index: number) =>
                    ` ${e} ${
                      item.habilities.length !== index + 1 ? " - " : ""
                    } `
                )}
              </p>
              <div className="skills__item-bar">
                <div
                  className="skills__item-bar--level"
                  style={{ width: `${item.lvl}0%` }}
                ></div>
              </div>
            </article>
          ))}
      </div>

      <div className="skills__items-container scroll">
        {data &&
          data.map((item: any, index: number) => (
            <a
              href={item.web}
              className="skills__link"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <article className="skills__article">
                <div className="skills__logo">
                  <Logos
                    type={item.type}
                    className={`skills__logo--${item.type}`}
                  />
                </div>
                <p className="skills__logo-title">{item.title}</p>
              </article>
            </a>
          ))}
      </div>
    </section>
  );
};

export default Skills;
