import {
  ArrowUpRight,
  BadgeCheck,
  CircleDollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

const recentOrders = [
  {
    id: "MH-2048",
    customer: "Ananya R.",
    product: "Studio Wireless Headphones",
    total: 2499,
    status: "To pack",
  },
  {
    id: "MH-2047",
    customer: "Rohan K.",
    product: "Minimal Classic Watch",
    total: 1799,
    status: "Shipped",
  },
  {
    id: "MH-2046",
    customer: "Priya S.",
    product: "Everyday Travel Backpack",
    total: 1299,
    status: "Delivered",
  },
];

export default function VendorDashboard() {
  const stats = [
    {
      label: "Gross sales",
      value: formatPrice(48250),
      change: "+12.8%",
      icon: CircleDollarSign,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Orders",
      value: "38",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "Active products",
      value: String(products.length),
      change: "2 low stock",
      icon: Package,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Store rating",
      value: "4.8 / 5",
      change: "Great work",
      icon: BadgeCheck,
      color: "bg-sky-50 text-sky-600",
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1 className="section-title">Store overview</h1>
          <p className="mt-2 text-sm text-slate-500">
            Here's how your demo store is doing this month.
          </p>
        </div>
        <Link to="/vendor/products" className="btn btn-primary">
          Manage products <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon, color }) => (
          <article
            key={label}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}
              >
                <Icon size={20} />
              </span>
              <span className="text-xs font-bold text-emerald-600">
                {change}
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-black tracking-tight">{value}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h2 className="font-black">Recent orders</h2>
              <p className="mt-1 text-xs text-slate-500">
                Latest activity from your store
              </p>
            </div>
            <Link
              to="/vendor/orders"
              className="text-sm font-bold text-indigo-600"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Order</th>
                  <th className="px-5 py-3 font-semibold">Customer</th>
                  <th className="px-5 py-3 font-semibold">Total</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-bold">{order.id}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {order.customer}
                    </td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-black">Store health</h2>
            <TrendingUp className="text-emerald-600" size={19} />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            A quick look at your demo store setup.
          </p>
          {[
            { label: "Products with images", value: 100 },
            { label: "Orders fulfilled", value: 76 },
            { label: "Profile completion", value: 90 },
          ].map((item) => (
            <div key={item.label} className="mt-5">
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-semibold text-slate-600">
                  {item.label}
                </span>
                <span className="font-bold">{item.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
          <div className="mt-6 rounded-xl bg-indigo-50 p-4">
            <p className="text-sm font-bold text-indigo-900">
              You're doing well!
            </p>
            <p className="mt-1 text-xs leading-5 text-indigo-700">
              Keep product information up to date to help customers make
              confident decisions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
