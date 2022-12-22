function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="mb-0 text-uppercase">React Sneakers</h3>
            <p className="opacity-5git ">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={12.27} src="/img/cart.svg" alt="cart" />
            <span>1205 рублей</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="userlogo" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex">
          <img width={20} height={20} src="/img/search.svg" alt="search" />
          <input placeholdr="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorit">
            <img src="/img/heart-unliked.svg" alt="heart-uliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="1" />
            <img src="" alt="" />
            <h5>кроссовки мужские Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="imgplus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="2" />
            <img src="" alt="" />
            <h5>кроссовки мужские Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="imgplus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="3" />
            <img src="" alt="" />
            <h5>кроссовки мужские Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="imgplus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="4" />
            <img src="" alt="" />
            <h5>кроссовки мужские Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="imgplus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
