import { MAIN_URL } from "consts/variables";
import axios from "axios";
import type { Work } from "typescript/work";

const getAchievements = async () => {
  try {
    const response = await axios.get<Work[]>(MAIN_URL + "/achievements/get");
    return response.data;
  } catch (e) {
    console.error("Mistake: ", e);
  }
};

export default getAchievements;
