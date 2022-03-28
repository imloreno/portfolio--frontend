import { useDispatch, useSelector } from "react-redux";
import type { Work } from "typescript/work";
import WorkArticle from "components/common/work_article";
import { useEffect } from "react";
import { setAchievements } from "state/actions";
import getAchievements from "scripts/getAchievements";
import useSwitchModal from "components/hooks/experience/useSwitchModal";
import WorkModal from "components/common/work_modal";

const AchievementsList = () => {
  //Modal data (useSwitchModal)
  const { closeModal, showModal, modalData, modalStatus } = useSwitchModal();

  //Using Redux
  const achievementsList: Work[] = useSelector(
    (state: any) => state.works.achievements
  );
  const dispatch = useDispatch();

  //Call API
  useEffect(() => {
    if (!achievementsList.length) {
      getAchievements().then((res: any): void => {
        dispatch(setAchievements(res));
      });
    }
  }, [dispatch, achievementsList.length]);

  return (
    <>
      {modalStatus && <WorkModal {...modalData} onClick={closeModal} />}
      {!!achievementsList && achievementsList.length > 0
        ? achievementsList.map((item: Work, index: number) => (
            <WorkArticle
              {...item}
              key={index}
              onClick={() => showModal(item)}
            />
          ))
        : [0, 1].map((element) => (
            <WorkArticle
              key={element}
              title="Lorem ipsum"
              img={"view/assets/profile-default.png"}
              className="work_article--loading"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum."
              tasks={["Task1", "Task2", "Task3"]}
              reference={[{ url: "/", type: "Link" }]}
              onClick={() => {}}
            />
          ))}
    </>
  );
};

export default AchievementsList;
