//ES
import home_screen_es from "consts/lang/es/home_screen.json";
import skills_screen_es from "consts/lang/es/skills_screen.json";
import academy_screen_es from "consts/lang/es/academy_screen.json";
import contact_screen_es from "consts/lang/es/contact_screen.json";
import menu_module_es from "consts/lang/es/menu_section.json";

//EN
import home_screen_en from "consts/lang/en/home_screen.json";
import skills_screen_en from "consts/lang/en/skills_screen.json";
import academy_screen_en from "consts/lang/en/academy_screen.json";
import contact_screen_en from "consts/lang/en/contact_screen.json";
import menu_module_en from "consts/lang/en/menu_section.json";

const langPick = (lang: string) => {
  switch (lang) {
    case "es":
      return {
        home: home_screen_es,
        skills: skills_screen_es,
        academy: academy_screen_es,
        contact: contact_screen_es,
        menu: menu_module_es,
      };
    case "en":
      return {
        home: home_screen_en,
        skills: skills_screen_en,
        academy: academy_screen_en,
        contact: contact_screen_en,
        menu: menu_module_en,
      };
    default:
      return {
        home: home_screen_en,
        skills: skills_screen_en,
        academy: academy_screen_en,
        contact: contact_screen_en,
        menu: menu_module_en,
      };
  }
};

export default langPick;
