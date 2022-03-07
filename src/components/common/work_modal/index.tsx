import { MAIN_URL } from "consts/variables";
import type { Work } from "typescript/work";

const WorkModal = (props: Work) => {
  const { title, img, description, tasks, reference, onClick } = props;

  return (
    <section className="work_modal">
      <div className="work_modal__container">
        <div className="work_modal__container_img">
          <img src={MAIN_URL + img} alt={title} />
        </div>
        <div className="work_modal__info">
          <div className="">
            <h2 className="work_modal__title">{title}</h2>
            <p>{description}</p>
          </div>
          <ul className="work_modal__task_list">
            <h3 className="work_modal__subtitle">Tasks</h3>
            {tasks.map((task: string, index: number) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <ul className="work_modal__button_list">
            <div className="work_modal__close_button" onClick={onClick}>
              <li>close</li>
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
      </div>
    </section>
  );
};

export default WorkModal;
