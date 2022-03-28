import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolioList } from "state/actions";
import getPortfolio from "scripts/getPortfolio";
import WorkArticle from "components/common/work_article";
import useSwitchModal from "components/hooks/experience/useSwitchModal";
import type { Work } from "typescript/work";
import WorkModal from "components/common/work_modal";

const PortfolioList = () => {
  //Modal data (useSwitchModal)
  const { closeModal, showModal, modalData, modalStatus } = useSwitchModal();

  //Using Redux
  const portfolioList: Work[] = useSelector(
    (state: any) => state.works.portfolio
  );
  const dispatch = useDispatch();

  //Call API
  useEffect(() => {
    if (!portfolioList.length) {
      getPortfolio().then((res: any): void => {
        dispatch(setPortfolioList(res));
      });
    }
  }, [dispatch, portfolioList.length]);

  return (
    <>
      {modalStatus && <WorkModal {...modalData} onClick={closeModal} />}
      {!!portfolioList && portfolioList.length > 0
        ? portfolioList.map((item: Work, index: number) => (
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

export default PortfolioList;
