import { Store, EyeOff, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { UserRole } from "@/types/product";

export default function AuthPage({ mode }: { mode: "login" | "register" }) {
  const isRegister = mode == "register";

  //let's handle the state for the inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole] = useState('customer')
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("")

  const handleSubmit=()=>{
    
  }

  return (
    <div>
      <main className="grid min-h-[75vh] lg:grid-cols-2">
      <section className="hidden flex-col justify-between bg-[#171b3b] p-12 text-white lg:flex">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xl font-black"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500">
            <Store size={20} />
          </span>{" "}
          MarketHub
        </Link>
        <div className="max-w-lg">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-300">
            A marketplace with room for everyone
          </p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-.05em]">
            {isRegister
              ? "Good things start with a store."
              : "Welcome back to your marketplace."}
          </h1>
          <p className="mt-5 leading-7 text-slate-300">
            Shop your favorites, manage your store, or explore the marketplace
            workspace.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Demo UI only · Authentication is not connected to a server
        </p>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-10">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 lg:hidden"
          >
            <Store size={17} /> MarketHub
          </Link>
          <p className="eyebrow">
            {isRegister ? "Create your account" : "Your account"}
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">
            {isRegister ? "Join MarketHub" : "Sign in"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {isRegister
              ? "Create a demo account to explore the marketplace."
              : "Enter any email and password to explore the demo."}
          </p>

          {message && (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              {message}
            </div>
          )}

          <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
            {isRegister && (
              <div>
                <label className="label" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  className="field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
            )}
            <div>
              <label className="label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="field pr-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>
            {isRegister && (
              <div>
                <label className="label" htmlFor="role">
                  I want to
                </label>
                <select
                  id="role"
                  className="field"
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                >
                  <option value="customer">Shop as a customer</option>
                  <option value="vendor">Sell as a vendor</option>
                  <option value="admin">Explore the admin demo</option>
                </select>
                <p className="mt-1 text-xs text-slate-400">
                  Role selection is for demonstration only. Real apps must
                  assign roles securely on the server. this will be update later
                </p>
              </div>
            )}
            <Button type="submit" className="w-full" size="lg">
              {isRegister ? "Create demo account" : "Sign in to demo"}{" "}
              <ArrowRight size={16} />
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            {isRegister ? "Already have an account?" : "New to MarketHub?"}{" "}
            <Link
              className="font-bold text-indigo-600 hover:text-indigo-800"
              to={isRegister ? "/login" : "/register"}
            >
              {isRegister ? "Sign in" : "Create an account"}
            </Link>
          </p>
          <div className="mt-6 rounded-xl bg-slate-100 p-3 text-xs leading-5 text-slate-500">
            This frontend uses local demo state only. Do not enter real
            passwords or personal information.
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
