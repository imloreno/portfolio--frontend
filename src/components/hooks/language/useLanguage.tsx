import langPick from "consts/lang";
import { useState } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState({
    lang: "en",
    langPick: langPick("en"),
  });

  return { language, setLanguage };
};

export default useLanguage;
