import React from "react";

interface Item {
  img: string;
  url: string;
  title: string;
}

const ReferenceCard = (reference: Item) => {
  const { img, url, title } = reference;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="reference_item"
    >
      <li>
        <img src={img} alt={title} />
        <p>{title}</p>
      </li>
    </a>
  );
};

export default ReferenceCard;
