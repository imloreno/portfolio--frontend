interface Props {
  type: string;
  text?: string;
  className?: string;
  onClick?: () => {};
}

const index = (props: Props) => {
  const { type, text, className, onClick } = props;
  const buttonTypes: any = {
    default: "button__default",
  };
  return (
    <button
      className={`button ${className} ${
        buttonTypes[type] ?? buttonTypes.default
      }`}
      onClick={() => onClick && onClick()}
    >
      {text ?? "Entrar"}
    </button>
  );
};

export default index;
