import type { Order } from "../types";

const STORAGE_KEY = "react-shop-orders";

type OrderMap = Record<string, Order>;

function loadAll(): OrderMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed as OrderMap;
    }
    return {};
  } catch {
    return {};
  }
}

function persist(orders: OrderMap): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function generateOrderId(): string {
  const now = new Date();
  const pad = (n: number, len = 2) => String(n).padStart(len, "0");
  const datePart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  const timePart = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  const ms = pad(now.getMilliseconds(), 3);
  return `ORD-${datePart}-${timePart}${ms}`;
}

export function saveOrder(order: Order): void {
  const orders = loadAll();
  orders[order.id] = order;
  persist(orders);
}

export function getOrder(id: string): Order | null {
  const orders = loadAll();
  return orders[id] ?? null;
}

export function listOrders(): Order[] {
  return Object.values(loadAll()).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}
