import React from "react";

interface Props {
  title: string;
  text: string;
  className: string;
}

const HomeArticle = (props: Props) => {
  return (
    <article className="personaldata__item">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
};

export default HomeArticle;
