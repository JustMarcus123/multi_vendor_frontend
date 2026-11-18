
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Package,
  Store,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const links = [
  { to: "/vendor", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/vendor/products", label: "My products", icon: Package },
  { to: "/vendor/orders", label: "Orders", icon: ClipboardList },
];

export default function VendorLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

   async function handleLogout(){

    await logout();

    navigate("/login",{replace:true});

   }

  const initials = (user?.name ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-[250px_1fr]">

      {/* Sidebar */}
      <aside className="border-r border-slate-200 bg-white lg:min-h-screen">
        <div className="flex h-[72px] items-center gap-3 border-b border-slate-100 px-6">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">
            <Store size={19} />
          </span>

          <div>
            <p className="font-black">MarketHub</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Vendor studio
            </p>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto p-3 lg:flex-col">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}

          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back to store
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="min-w-0 p-4 sm:p-7 lg:p-9">

        {/* Header */}
        <header className="mb-7 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Vendor workspace
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Welcome back, {user?.name ?? "Vendor"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>

            <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
              {initials || "V"}
            </div>
          </div>
        </header>

        {/* Nested vendor pages render here */}
        <Outlet />
      </main>
    </div>
  );
}
