import actionRoutes from "state/types/routes";

export const setPageNum = (payload: number) => ({
  type: actionRoutes.SET_PAGE_TARGET,
  payload,
});
