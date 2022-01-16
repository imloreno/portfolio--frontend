interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
  icon?: JSX.Element;
  children?: any;
}

const Section = (props: Props) => {
  const { title, subtitle, className, icon, children } = props;
  return (
    <section className={`section ${className ?? ""}`}>
      <header className="section__header">
        <h2 className="section__title">
          {icon}
          <span>{title ?? ""}</span>
        </h2>
        {subtitle && <p>{subtitle}</p>}
      </header>
      {children}
    </section>
  );
};

export default Section;
