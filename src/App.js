import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Кроссовки мужские Nike Blazer Mid Suede",
    price: 143499,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Кроссовки мужские Abibass Blazer Mid Suede",
    price: 1299,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Кроссовки мужские Adadass Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки мужские Azazaass Blazer Mid Suede",
    price: 77777,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img width={20} height={20} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">

          {arr.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClickFavorite={() => console.log('Добавили в закладки')}
            onClickPlus={() => console.log('Нажали плюс')}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
