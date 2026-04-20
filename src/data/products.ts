import type { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "프리미엄 무선 헤드폰",
    price: 189000,
    category: "전자기기",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "노이즈 캔슬링과 40시간 재생 시간을 제공하는 프리미엄 블루투스 헤드폰입니다.",
    rating: 4.7,
    stock: 12,
  },
  {
    id: 2,
    name: "에르고노믹 키보드",
    price: 129000,
    category: "전자기기",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description:
      "장시간 타이핑에도 손목을 편안하게 유지해주는 인체공학 무선 키보드.",
    rating: 4.5,
    stock: 25,
  },
  {
    id: 3,
    name: "미니멀 가죽 지갑",
    price: 59000,
    category: "패션",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description:
      "이탈리아산 천연 가죽으로 제작된 슬림 카드 지갑. 최대 10장의 카드를 수납할 수 있습니다.",
    rating: 4.8,
    stock: 40,
  },
  {
    id: 4,
    name: "스테인리스 텀블러 500ml",
    price: 24000,
    category: "리빙",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    description:
      "12시간 보온·보냉이 가능한 진공 이중 구조의 데일리 텀블러입니다.",
    rating: 4.6,
    stock: 80,
  },
  {
    id: 5,
    name: "러닝 스니커즈",
    price: 98000,
    category: "패션",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description:
      "가볍고 탄성이 뛰어난 미드솔을 적용한 데일리 러닝용 스니커즈.",
    rating: 4.4,
    stock: 18,
  },
  {
    id: 6,
    name: "아로마 디퓨저",
    price: 45000,
    category: "리빙",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description:
      "은은한 LED 무드등과 함께 사용할 수 있는 초음파 아로마 디퓨저.",
    rating: 4.3,
    stock: 33,
  },
  {
    id: 7,
    name: "스마트 워치 X",
    price: 259000,
    category: "전자기기",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    description:
      "심박·수면·스트레스를 모니터링하고 GPS까지 지원하는 프리미엄 스마트워치.",
    rating: 4.6,
    stock: 9,
  },
  {
    id: 8,
    name: "원목 도마 세트",
    price: 38000,
    category: "리빙",
    image:
      "https://images.unsplash.com/photo-1584990347449-a8d1b5a1b1e8?auto=format&fit=crop&w=800&q=80",
    description:
      "고밀도 아카시아 원목으로 제작된 3종 사이즈 도마 세트입니다.",
    rating: 4.5,
    stock: 22,
  },
  {
    id: 9,
    name: "캔버스 백팩",
    price: 72000,
    category: "패션",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description:
      "15인치 노트북 수납이 가능한 방수 캔버스 소재의 데일리 백팩.",
    rating: 4.7,
    stock: 30,
  },
];

export const categories = ["전체", "전자기기", "패션", "리빙"] as const;
