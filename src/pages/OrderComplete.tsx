import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../utils/orders";
import { formatPrice } from "../utils/format";

export default function OrderComplete() {
  const { orderId } = useParams<{ orderId: string }>();
  const order = useMemo(
    () => (orderId ? getOrder(orderId) : null),
    [orderId],
  );

  if (!order) {
    return (
      <div className="container">
        <div className="order-complete order-complete--missing">
          <h1 className="page-title">주문을 찾을 수 없습니다</h1>
          <p className="empty">
            유효하지 않은 주문번호입니다.
            {orderId && (
              <>
                <br />
                <code className="order-complete__id-inline">{orderId}</code>
              </>
            )}
          </p>
          <Link to="/" className="btn btn--primary">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const createdAt = new Date(order.createdAt);

  return (
    <div className="container">
      <div className="order-complete">
        <section className="order-complete__hero">
          <div className="order-complete__check" aria-hidden="true">
            ✓
          </div>
          <h1 className="order-complete__title">결제가 완료되었습니다</h1>
          <p className="order-complete__subtitle">
            주문이 정상적으로 접수되었습니다. 아래 주문번호로 언제든 다시
            확인하실 수 있습니다.
          </p>
          <div className="order-complete__id-box">
            <span className="order-complete__label">주문번호</span>
            <strong className="order-complete__id">{order.id}</strong>
            <span className="order-complete__date">
              {createdAt.toLocaleString("ko-KR")}
            </span>
          </div>
        </section>

        <section className="order-complete__section">
          <h2 className="order-complete__section-title">
            주문 상품 · 총 {order.totalCount}개
          </h2>
          <ul className="order-complete__items">
            {order.items.map(({ product, quantity }) => (
              <li key={product.id} className="order-complete__item">
                <div className="order-complete__media">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="order-complete__info">
                  <Link
                    to={`/products/${product.id}`}
                    className="order-complete__name"
                  >
                    {product.name}
                  </Link>
                  <span className="order-complete__category">
                    {product.category}
                  </span>
                  <span className="order-complete__meta">
                    {formatPrice(product.price)} · {quantity}개
                  </span>
                </div>
                <strong className="order-complete__line-total">
                  {formatPrice(product.price * quantity)}
                </strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="order-complete__summary">
          <div className="summary__row">
            <span>상품 금액</span>
            <span>{formatPrice(order.totalPrice)}</span>
          </div>
          <div className="summary__row">
            <span>배송비</span>
            <span>무료</span>
          </div>
          <hr className="summary__divider" />
          <div className="summary__total">
            <span>총 결제금액</span>
            <strong>{formatPrice(order.totalPrice)}</strong>
          </div>
        </section>

        <div className="order-complete__actions">
          <Link to="/" className="btn btn--ghost">
            쇼핑 계속하기
          </Link>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              if (navigator.clipboard && orderId) {
                navigator.clipboard
                  .writeText(orderId)
                  .then(() => alert("주문번호가 복사되었습니다."))
                  .catch(() => {});
              }
            }}
          >
            주문번호 복사
          </button>
        </div>
      </div>
    </div>
  );
}
