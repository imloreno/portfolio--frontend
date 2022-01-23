interface props {
  title: string;
  subtitle?: string;
  children: any;
  className?: string;
}

const ArticleAcademy = (props: props) => {
  const { title, subtitle, children, className = "" } = props;

  return (
    <article className={className + " article-academy"}>
      <header className="article-academy__header">
        <h2 className="article-academy__title">{title}</h2>
        {subtitle && <p className="article-academy__subtitle">{subtitle}</p>}
      </header>
      <div className="article-academy__content">{children}</div>
    </article>
  );
};

export default ArticleAcademy;
