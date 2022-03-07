import { MAIN_URL } from "consts/variables";
import axios from "axios";
import type { Work } from "typescript/work";

const getPortfolio = async () => {
  try {
    const response = await axios.get<Work[]>(MAIN_URL + "/portfolio/get");
    return response.data;
  } catch (e) {
    console.error("Mistake: ", e);
  }
};

export default getPortfolio;
