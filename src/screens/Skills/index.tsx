import { useEffect, useState } from "react";
import { getLogos } from "scripts/getLogos";
import Logos from "./logos";

const Skills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLogos({ callback: (e) => setData(e) });
  }, []);

  return (
    <div className="skills">
      <header className="skills__header">
        <h1 className="title">Mis habilidades.</h1>
        {/* <p>Estas son mis habilidades más importantes</p> */}
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
                <div className="skills__item-bar--level"></div>
              </div>
            </article>
          ))}
      </div>

      <div className="skills__items-container scroll">
        {data &&
          data.map((item: any, index: number) => (
            <article className="skills__article" key={index}>
              <div className="skills__logo">
                <Logos
                  type={item.type}
                  className={`skills__logo--${item.type}`}
                />
              </div>
              <p className="skills__logo-title">{item.title}</p>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Skills;
