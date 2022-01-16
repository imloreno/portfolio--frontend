import Filter from "components/common/filter";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__center"></div>
      <ul className="loading-circle__content">
        <li className="loading__circle"></li>
        <li className="loading__circle"></li>
        <li className="loading__circle"></li>
        <li className="loading__circle"></li>
      </ul>
      <Filter />
    </div>
  );
};

export default Loading;
