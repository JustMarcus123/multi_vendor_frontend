import { ArrowRight, CheckCircle2, Icon, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"




export const HomePage = () => {
  return (
   <main>
    <section className="container-page pt-7 sm:pt-10">
        <div className="relative overflow-hidden rounded-[28px] bg-[#171b3b] px-6 py-10 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[24%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
              <Sparkles size={14} /> The marketplace for good finds
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-.05em] sm:text-6xl">
              Great finds.
              <br />
              Independent minds.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Discover thoughtful products from independent stores, all in one
              place. Shop small, find your next favorite.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#featured">
                <Button size="lg">
                  Explore products <ArrowRight size={17} />
                </Button>
              </a>
              <Link to="/vendor">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/20"
                >
                  Open a store
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-300" />{" "}
                Independent vendors
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-300" /> Secure
                checkout demo
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck size={14} className="text-emerald-300" /> Order tracking
                demo
              </span>
            </div>
          </div>
          <div className="relative mt-8 grid grid-cols-3 gap-2 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0 sm:w-[300px]">
            {[
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
            ].map((image, index) => (
              <img
                key={image}
                src={image}
                alt={["Headphones", "Watch", "Backpack"][index]}
                className={`h-24 w-full rounded-2xl border border-white/20 object-cover shadow-xl sm:h-32 ${index === 1 ? "translate-y-4" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container-page py-8 sm:py-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {
            [
               {
              icon: StoreIcon,
              title: "Independent stores",
              text: "Discover unique vendors",
            },
            {
              icon: ShieldCheck,
              title: "Thoughtful shopping",
              text: "Clear product details",
            },
            {
              icon: Truck,
              title: "Order updates",
              text: "Track every purchase",
            },
            {
              icon: PackageCheck,
              title: "Easy returns",
              text: "A simple demo flow",
            },
            ].map(({icon: Icon,title,text})=>(
              <div key={title} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={19}/>
                </span>
                <div>
                   <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section id="featured" className="container-page pb-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
             <p className="eyebrow">Curated for you</p>
            <h2 className="section-title mt-2">Find your next favorite</h2>
            <p className="mt-2 text-sm text-slate-500">
              A few good things from stores worth knowing.
            </p>
          </div>
          <Link to="/products"
                      className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800"
          >
             View all products <ArrowRight size={16} />
          </Link>
        </div>
      </section>
   </main>
  )
}

function StoreIcon({ size = 19 }: { size?: number }) {
  return <PackageCheck size={size} />;
}

