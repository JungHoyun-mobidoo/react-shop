import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { generateOrderId, saveOrder } from "../utils/orders";

export default function Cart() {
  const navigate = useNavigate();
  const { items, totalPrice, totalCount, updateQuantity, removeItem, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">장바구니</h1>
        <div className="empty-state">
          <p className="empty">장바구니가 비어있습니다.</p>
          <Link to="/" className="btn btn--primary">
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    if (items.length === 0) return;
    const orderId = generateOrderId();
    saveOrder({
      id: orderId,
      items,
      totalCount,
      totalPrice,
      createdAt: new Date().toISOString(),
    });
    clearCart();
    navigate(`/orders/${orderId}`);
  };

  return (
    <div className="container">
      <h1 className="page-title">장바구니 ({totalCount})</h1>

      <div className="cart">
        <ul className="cart__list">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="cart__item">
              <Link to={`/products/${product.id}`} className="cart__media">
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="cart__info">
                <Link
                  to={`/products/${product.id}`}
                  className="cart__name"
                >
                  {product.name}
                </Link>
                <span className="cart__category">{product.category}</span>
                <span className="cart__price">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="cart__controls">
                <div className="qty qty--sm">
                  <button
                    type="button"
                    className="qty__btn"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    aria-label="수량 감소"
                  >
                    −
                  </button>
                  <span className="qty__value">{quantity}</span>
                  <button
                    type="button"
                    className="qty__btn"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    aria-label="수량 증가"
                  >
                    +
                  </button>
                </div>
                <strong className="cart__line-total">
                  {formatPrice(product.price * quantity)}
                </strong>
                <button
                  type="button"
                  className="cart__remove"
                  onClick={() => removeItem(product.id)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="summary">
          <h2 className="summary__title">주문 요약</h2>
          <div className="summary__row">
            <span>상품 수량</span>
            <span>{totalCount}개</span>
          </div>
          <div className="summary__row">
            <span>상품 금액</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="summary__row">
            <span>배송비</span>
            <span>무료</span>
          </div>
          <hr className="summary__divider" />
          <div className="summary__total">
            <span>총 결제금액</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={handleCheckout}
          >
            결제하기
          </button>
          <button
            type="button"
            className="btn btn--ghost btn--block"
            onClick={clearCart}
          >
            장바구니 비우기
          </button>
        </aside>
      </div>
    </div>
  );
}
