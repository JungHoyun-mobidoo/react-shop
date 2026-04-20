import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">
          <span className="logo__mark">R</span>
          <span className="logo__text">React Shop</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav__link">
            상품
          </NavLink>
          <NavLink to="/cart" className="nav__link nav__link--cart">
            장바구니
            {totalCount > 0 && <span className="badge">{totalCount}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
