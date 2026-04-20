import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import OrderComplete from "./pages/OrderComplete";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders/:orderId" element={<OrderComplete />} />
          <Route
            path="*"
            element={
              <div className="container">
                <p className="empty">페이지를 찾을 수 없습니다.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} React Shop · Demo project
        </div>
      </footer>
    </div>
  );
}
