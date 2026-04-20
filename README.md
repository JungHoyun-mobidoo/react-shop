# React Shop

Vite + React + TypeScript 기반의 간단한 e-commerce 데모 프로젝트입니다. 모든 상품 데이터는 mock으로 제공되며, 장바구니 상태는 `localStorage`에 자동 저장됩니다.

## ✨ 주요 기능

- 🛍️ 상품 목록 (카테고리 필터 / 검색)
- 📄 상품 상세 페이지 (수량 선택)
- 🛒 장바구니 (수량 변경, 개별/전체 삭제, 결제 데모)
- 💾 장바구니 상태 localStorage 영속화
- 📱 반응형 모던 UI

## 🧱 기술 스택

- React 18 + TypeScript
- Vite 5
- React Router v6
- React Context API (장바구니 상태)
- Plain CSS (디자인 토큰 기반)

## 🚀 시작하기

```bash
npm install
npm run dev
```

기본적으로 `http://localhost:5173` 에서 실행됩니다.

## 📦 빌드

```bash
npm run build
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/      # 재사용 컴포넌트 (Header, ProductCard)
├── context/         # CartContext (장바구니 전역 상태)
├── data/            # 상품 mock 데이터
├── pages/           # Home, ProductDetail, Cart
├── styles/          # 글로벌 CSS
├── types/           # 공통 타입
├── utils/           # 헬퍼 (가격 포맷)
├── App.tsx
└── main.tsx
```

## 🧪 Mock 데이터 수정

`src/data/products.ts` 파일에서 상품을 자유롭게 추가/수정할 수 있습니다.
