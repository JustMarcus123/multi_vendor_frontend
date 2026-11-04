import { Store } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "../ui/button"

export const Navbar = () => {

  
  const navClass = ({isActive}: {isActive: boolean})=>
     `text-sm font-semibold transition ${isActive ? "text-indigo-700" : "text-slate-600 hover:text-slate-950"}`;

  

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
        <span className="text-xl font-black tracking-tight text-slate-900">
          <Store size={20}/>
        </span>
        <span className="text-xl font-black tracking-tight text-slate-900">
          Market <span className="text-indigo-600">Hub</span>
        </span>
        </Link>

          <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/products" className={navClass}>Products</NavLink>
          <NavLink to="/vendor" className={navClass}>Sell with us</NavLink>
        </nav>

      {/* for signup or signin  */}
      <div className="hidden items-center gap-2 sm:flex">
        <Link to="/login">
        <Button variant="ghost">Sign in</Button>
        </Link>

      </div>
      </div>

    </header>
  )
}
