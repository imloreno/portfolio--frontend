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
      {!!achievementsList &&
        achievementsList.map((item: Work, index: number) => (
          <WorkArticle {...item} key={index} onClick={() => showModal(item)} />
        ))}
    </>
  );
};

export default AchievementsList;
