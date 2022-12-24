import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] =React.useState(false);

  React.useEffect(() => {
    fetch('https://63a727c57989ad3286eafb6c.mockapi.io/items').then(res => {
    return res.json();
  }).then(json => {
    setItems(json)
  })
  
  }, [])

  const onAddToCard = (obj) => {
    setCartItems(prev =>[...prev, obj])
  }

  const onChangeSearchInput = (event) => {
      
      setSearchValue(event.target.value);
  }
  
  return ( 
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img width={20} height={20} src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" width={20} height={20} src="/img/btn-remove.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
            <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickFavorite={() => console.log('Добавили в закладки')}
            onPlus={(obj) => onAddToCard(obj)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
