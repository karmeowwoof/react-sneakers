import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    
      axios.get('https://63a727c57989ad3286eafb6c.mockapi.io/items').then(res => {
        setItems(res.data);
      });
      axios.get('https://63a727c57989ad3286eafb6c.mockapi.io/cart').then(res => {
        setCartItems(res.data)
      });
  }, []);

 

  const onAddToCard = (obj) => {
    axios.post('https://63a727c57989ad3286eafb6c.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
  
     axios.delete(`https://63a727c57989ad3286eafb6c.mockapi.io/cart/${id}`);
     setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://63a727c57989ad3286eafb6c.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  return (

    
    <div className="wrapper clear">
      
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
      <Route path="/favorites" element="Это тестовая">  </Route>
      </Routes>
      

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img width={20} height={20} src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clearSearch cu-p"
                width={20}
                height={20}
                src="/img/btn-remove.svg"
                alt="clearSearch"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
           .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
