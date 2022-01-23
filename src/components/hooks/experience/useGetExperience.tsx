import { useState, useEffect } from "react";
import { MAIN_URL } from "consts/variables";

const useGetExperience = (): any => {
  const [state, setState] = useState({
    experience: [],
    loading: true,
  });

  useEffect(() => {
    const getExperience = async () => {
      const response = await fetch(MAIN_URL + "/projects/get");
      const data = await response.json();
      setState({
        experience: data,
        loading: false,
      });
    };
    getExperience();
  }, []);

  return state;
};

export default useGetExperience;
