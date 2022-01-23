import actionRoutes from "state/types/routes";

interface state {
  page: number;
  pages:
    | string
    | {
        path: string;
        icon: string;
        text: string;
        component: string;
      }[];
}

interface action {
  type: string;
  payload: any;
}

const initialState = {
  page: 0,
  pages: [
    {
      path: "/",
      icon: "home",
      text: "Inicio",
      component: "home",
    },
    // {
    //   path: "/about",
    //   icon: "about",
    //   text: "Sobre Mí",
    //   component: "home",
    // },
    {
      path: "/skills",
      icon: "skills",
      text: "Habilidades",
      component: "skills",
    },
    {
      path: "/projects",
      icon: "projects",
      text: "Experiencia profesional",
      component: "projects",
    },
    {
      path: "/academy",
      icon: "academy",
      text: "Formación",
      component: "academy",
    },
    {
      path: "/contact",
      icon: "contact",
      text: "Contacto",
      component: "contact",
    },
  ],
};

const routes = (store: state = initialState, action: action) => {
  switch (action.type) {
    case actionRoutes.SET_PAGE_TARGET:
      return { ...store, page: action.payload };

    default:
      return store;
  }
};

export default routes;
