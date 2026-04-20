import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container">
        <p className="empty">존재하지 않는 상품입니다.</p>
        <Link to="/" className="btn btn--ghost">
          ← 상품 목록으로
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    navigate("/cart");
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">
        ← 상품 목록으로
      </Link>

      <div className="detail">
        <div className="detail__media">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail__info">
          <span className="tag">{product.category}</span>
          <h1 className="detail__title">{product.name}</h1>
          <div className="detail__meta">
            <span className="card__rating">★ {product.rating.toFixed(1)}</span>
            <span className="card__stock">재고 {product.stock}개</span>
          </div>
          <p className="detail__desc">{product.description}</p>

          <div className="detail__price">{formatPrice(product.price)}</div>

          <div className="qty">
            <button
              type="button"
              className="qty__btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="수량 감소"
            >
              −
            </button>
            <span className="qty__value">{quantity}</span>
            <button
              type="button"
              className="qty__btn"
              onClick={() =>
                setQuantity((q) => Math.min(product.stock, q + 1))
              }
              aria-label="수량 증가"
            >
              +
            </button>
          </div>

          <div className="detail__actions">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={handleAdd}
            >
              장바구니 담기
            </button>
            <button
              type="button"
              className="btn btn--primary"
              onClick={handleBuyNow}
            >
              바로 구매
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
