import json from "./logolist.json";

interface props {
  callback: (e: any) => any;
}
const getLogos = (props: props) => {
  props.callback(json);
};

export { getLogos };
