import STORE from "state/store";
import { Provider } from "react-redux";
import Routes from "Routes";
import "styles/main.scss";

const App: React.FC = () => {
  return (
    <>
      <Provider store={STORE}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
