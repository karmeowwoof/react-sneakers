import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

const arr = [];

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] =React.useState(false);

  fetch('https://63a727c57989ad3286eafb6c.mockapi.io/items').then(res => {
    return res.json();
  }).then(json => {
    console.log(json)
  })
  
  return ( 
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/> }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img width={20} height={20} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {items.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClickFavorite={() => console.log('Добавили в закладки')}
            onPlus={() => console.log('Нажали плюс')}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
