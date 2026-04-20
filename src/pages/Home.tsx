import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("전체");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        category === "전체" || product.category === category;
      const matchKeyword = product.name
        .toLowerCase()
        .includes(keyword.trim().toLowerCase());
      return matchCategory && matchKeyword;
    });
  }, [keyword, category]);

  return (
    <div className="container">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">SPRING COLLECTION</p>
          <h1 className="hero__title">
            오늘의 라이프스타일,
            <br />
            <span className="hero__accent">React Shop</span>에서.
          </h1>
          <p className="hero__desc">
            엄선된 상품들을 합리적인 가격에 만나보세요. 전체 상품 무료 배송.
          </p>
        </div>
      </section>

      <section className="toolbar">
        <div className="chips">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`chip ${c === category ? "chip--active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="search"
          className="search"
          placeholder="상품명을 검색하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </section>

      {filtered.length === 0 ? (
        <p className="empty">검색 결과가 없습니다.</p>
      ) : (
        <section className="grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}
