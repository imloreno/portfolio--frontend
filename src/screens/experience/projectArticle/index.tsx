import Buttons from "components/common/buttons";

interface props {
  img: string;
  className?: string;
  title: string;
  tasks: [string];
  paragraph: string;
  reference: any;
  onClick?: () => void;
}

const ProjectArticle = (props: props) => {
  const {
    img,
    title,
    tasks,
    paragraph,
    reference,
    className = "",
    onClick,
  } = props;

  return (
    <article className={`experience__item ${className}`} onClick={onClick}>
      <div className="experience__image">
        <img src={img} alt={title} />
      </div>
      <div className="experience__data">
        <h2 className="experience__title subtitle">{title}</h2>
        <p>{paragraph}</p>
        <ul className="experience__task-container">
          {tasks.map((task: string, index: number) => (
            <li key={index} className="experience__task">
              {task}
            </li>
          ))}
        </ul>
        <div className="experience__buttons">
          {reference &&
            reference.map((item: any, index: number) => (
              <a href={item.url} key={index} rel="noreferrer" target="_blank">
                <Buttons
                  text={item.type}
                  type="default"
                  className="experience__btn"
                />
              </a>
            ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectArticle;
