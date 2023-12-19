import "./App.scss";
import "./components/components.scss";
import Component from "./components/component";
import data from "./data";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Тестовое задание 1</h1>
      <section className="components">
        <h2 className="components__title">Список компонентов</h2>
        {data.map((item) => {
          return <Component key={crypto.randomUUID()} component={item} />;
        })}
      </section>
    </div>
  );
}

export default App;
