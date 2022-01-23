interface Props {
  type: string;
  text?: string;
  className?: string;
  onClick?: () => {};
}

const Buttons = (props: Props) => {
  const { type, text, className, onClick } = props;
  const buttonTypes: any = {
    default: "button__default",
    contrast: "button__contrast",
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

export default Buttons;
