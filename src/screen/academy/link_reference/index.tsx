interface Item {
  img?: string;
  title: string;
  url: string;
}

const LinkReference = (item: Item) => {
  const handleClick = () => (window.location.href = item.url);

  return (
    <div className="link_reference" onClick={handleClick}>
      <p>{item.title}</p>
    </div>
  );
};

export default LinkReference;
