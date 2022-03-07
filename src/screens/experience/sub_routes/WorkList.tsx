import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getExperience from "scripts/getExperience";
import { setWorkList } from "state/actions";
import WorkArticle from "components/common/work_article";

const WorkList = () => {
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
      {!!workList &&
        workList.map((item: any, index: number) => (
          <WorkArticle {...item} key={index} />
        ))}
    </>
  );
};

export default WorkList;
