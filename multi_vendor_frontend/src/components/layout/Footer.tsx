import { Link } from "react-router-dom";
import { Heart, Store } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="mb-3 inline-flex items-center gap-2 font-black text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white"><Store size={18} /></span>
            Market<span className="-ml-2 text-indigo-600">Hub</span>
          </Link>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            A thoughtfully designed marketplace bringing independent stores and everyday shoppers together.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold">Explore</h3>
          <div className="flex flex-col gap-2 text-sm text-slate-500">
            <Link to="/products" className="hover:text-indigo-600">All products</Link>
            <Link to="/cart" className="hover:text-indigo-600">Your cart</Link>
            <Link to="/orders" className="hover:text-indigo-600">My orders</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold">Your account</h3>
          <div className="flex flex-col gap-2 text-sm text-slate-500">
            <Link to="/login" className="hover:text-indigo-600">Sign in</Link>
            <Link to="/register" className="hover:text-indigo-600">Create account</Link>
            <Link to="/vendor" className="hover:text-indigo-600">Become a vendor</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="container-page flex flex-col justify-between gap-2 py-4 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} MarketHub. Demo frontend.</span>
          <span className="inline-flex items-center gap-1">Design and Developed <Heart size={12} className="text-rose-500" /> By Marcus</span>
        </div>
      </div>
    </footer>
  );
}
