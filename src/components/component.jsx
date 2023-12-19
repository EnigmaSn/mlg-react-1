import "./component.scss";
function Component({ component }) {
  return (
    <>
      <article className="item">
        <h1 className="item__title">{component.header}</h1>
        <ul className="item__options">
          {component.options.map((item) => {
            return (
              <li
                key={crypto.randomUUID()}
                item={item}
                className="item__option"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <p className="item__text">{component.text}</p>
      </article>
    </>
  );
}

export default Component;
