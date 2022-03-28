import { MAIN_URL } from "consts/variables";
import type { Work } from "typescript/work";

type ClassNames = {
  className?: string;
};
interface Props extends ClassNames, Work {}

const WorkArticle = (props: Props) => {
  const {
    title,
    img,
    description,
    tasks,
    reference,
    onClick,
    className = "",
  } = props;

  return (
    <article className={`work_article ${className}`}>
      <div className="work_profile">
        <img src={MAIN_URL + img} alt={title} />
      </div>
      <div className="work_description">
        <h3 className="work_title">{title}</h3>
        <p className="work_description">{description}</p>

        <ul className="work_tasks">
          {tasks.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <ul className="work_reference">
          <div className="work_reference__button" onClick={onClick}>
            <li>details</li>
          </div>
          {reference.map((item: any, index: number) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <li>{item.type}</li>
            </a>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default WorkArticle;
