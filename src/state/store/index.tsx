import { createStore } from "redux";
import reducer from "state/reducers";

const STORE = createStore(reducer);

export default STORE;
