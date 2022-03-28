import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getExperience from "scripts/getExperience";
import { setWorkList } from "state/actions";
import WorkArticle from "components/common/work_article";
import WorkModal from "components/common/work_modal";
import useSwitchModal from "components/hooks/experience/useSwitchModal";

const WorkList = (): JSX.Element => {
  //Modal data (useSwitchModal)
  const { closeModal, showModal, modalData, modalStatus } = useSwitchModal();

  //Using Redux
  const workList = useSelector((state: any) => state.works.works);
  const dispatch = useDispatch();

  //Call API
  useEffect(() => {
    if (!workList.length) {
      getExperience().then((res: any) => {
        dispatch(setWorkList(res));
      });
    }
  }, [dispatch, workList.length]);

  return (
    <>
      {modalStatus && <WorkModal {...modalData} onClick={closeModal} />}
      {!!workList && workList.length > 0
        ? workList.map((item: any, index: number) => (
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

export default WorkList;
