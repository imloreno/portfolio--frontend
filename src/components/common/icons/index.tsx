import {
  FiHome,
  FiBookOpen,
  FiMessageSquare,
  FiCoffee,
  FiGitBranch,
  FiFeather,
} from "react-icons/fi";

//Props structure
interface props {
  className?: string;
  type: string;
}

const Index = (props: props): JSX.Element => {
  const { className, type } = props;

  switch (type) {
    case "home":
      return <FiHome className={className ?? ""} />;
    case "about":
      return <FiCoffee className={className ?? ""} />;
    case "skills":
      return <FiBookOpen className={className ?? ""} />;
    case "projects":
      return <FiGitBranch className={className ?? ""} />;
    case "academy":
      return <FiFeather className={className ?? ""} />;
    case "contact":
      return <FiMessageSquare className={className ?? ""} />;
    default:
      return <FiHome className={className ?? ""} />;
  }
};

export default Index;
