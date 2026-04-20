import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();

  return (
    <article className="card">
      <Link to={`/products/${product.id}`} className="card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="card__category">{product.category}</span>
      </Link>
      <div className="card__body">
        <Link to={`/products/${product.id}`} className="card__title">
          {product.name}
        </Link>
        <div className="card__meta">
          <span className="card__rating">★ {product.rating.toFixed(1)}</span>
          <span className="card__stock">재고 {product.stock}</span>
        </div>
        <div className="card__footer">
          <strong className="card__price">{formatPrice(product.price)}</strong>
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => addItem(product)}
          >
            담기
          </button>
        </div>
      </div>
    </article>
  );
}
