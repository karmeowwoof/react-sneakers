import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="mb-0 text-uppercase">React Sneakers</h3>
          <p className="opacity-5git ">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={12.27} src="/img/cart.svg" alt="cart" />
          <span>1205 рублей</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-30 cu-p"
              width={18}
              height={12.27}
              src="/img/like.svg"
              alt="favorites"
            />
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="userlogo" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
