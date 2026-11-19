import { useState } from "react";
import { ClipboardList, Search } from "lucide-react";
import { formatPrice } from "@/lib/utils";

type OrderStatus = "To pack" | "Shipped" | "Delivered";

interface VendorOrder {
  id: string;
  customer: string;
  date: string;
  product: string;
  total: number;
  status: OrderStatus;
}

const demoOrders: VendorOrder[] = [
  {
    id: "MH-2048",
    customer: "Ananya R.",
    date: "28 Oct 2026",
    product: "Studio Wireless Headphones",
    total: 2499,
    status: "To pack",
  },
  {
    id: "MH-2047",
    customer: "Rohan K.",
    date: "27 Oct 2026",
    product: "Minimal Classic Watch",
    total: 1799,
    status: "Shipped",
  },
  {
    id: "MH-2046",
    customer: "Priya S.",
    date: "26 Oct 2026",
    product: "Everyday Travel Backpack",
    total: 1299,
    status: "Delivered",
  },
  {
    id: "MH-2045",
    customer: "Arjun M.",
    date: "25 Oct 2026",
    product: "Studio Wireless Headphones",
    total: 2499,
    status: "To pack",
  },
];

export default function VendorOrdersPage() {
  const [orders, setOrders] = useState(demoOrders);
  const [search, setSearch] = useState("");

  function updateStatus(id: string, status: OrderStatus) {
    setOrders((current) =>
      current.map((order) => (order.id === id ? { ...order, status } : order)),
    );
  }

  const filteredOrders = orders.filter((order) =>
    `${order.id} ${order.customer} ${order.product}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1 className="section-title">Orders</h1>
          <p className="mt-2 text-sm text-slate-500">
            Review incoming orders and update fulfillment status.
          </p>
        </div>
        <span className="badge">{orders.length} demo orders</span>
      </div>
      <div className="mb-4 relative max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          className="field pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders..."
        />
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                <th className="px-5 py-4">Order</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Total</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Update status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-t border-slate-100">
                  <td className="px-5 py-4">
                    <p className="font-bold">{order.id}</p>
                    <p className="mt-1 text-xs text-slate-400">{order.date}</p>
                  </td>
                  <td className="px-5 py-4">{order.customer}</td>
                  <td className="px-5 py-4 text-slate-600">{order.product}</td>
                  <td className="px-5 py-4 font-semibold">
                    {formatPrice(order.total)}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`badge ${order.status === "Delivered" ? "badge-green" : order.status === "Shipped" ? "badge-gray" : "badge-amber"}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <select
                      className="field w-32 py-2 text-xs"
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order.id, e.target.value as OrderStatus)
                      }
                      aria-label={`Update ${order.id} status`}
                    >
                      <option>To pack</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
