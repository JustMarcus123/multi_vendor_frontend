import { useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  ShoppingCart,
  Store,
  X,
} from "lucide-react";

import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import ProductCard from "@/components/productCard";

import { products } from "@/data/products";
import type { Product } from "@/types/product";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("featured");
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Search, filter, and sort the products.
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.vendorName.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sortOrder === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, selectedCategory, sortOrder]);

  // Add a product to the cart.
  function addToCart(product: Product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  // Calculate the total price of the cart.
  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0,
  );

  function removeFromCart(indexToRemove: number) {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove),
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2 text-primary-foreground">
              <Store className="h-5 w-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Market<span className="text-primary">Hub</span>
            </span>
          </a>

          <div className="hidden max-w-md flex-1 sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products or vendors..."
                className="pl-9"
              />
            </div>
          </div>

          <Button
            variant="outline"
            onClick={() => setShowCart((visible) => !visible)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart ({cart.length})
          </Button>
        </div>

        {/* Search on smaller screens */}
        <div className="px-4 pb-4 sm:hidden">
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products or vendors..."
          />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Hero section */}
        <section className="mb-10 rounded-2xl bg-muted px-6 py-10 sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            One marketplace, many stores
          </p>

          <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Find products you love. Support stores you trust.
          </h1>

          <p className="mt-4 max-w-xl text-muted-foreground">
            Explore products from independent vendors, all in one place.
          </p>

          <Button
            className="mt-6"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Explore products
          </Button>
        </section>

        {/* Product section */}
        <section id="products">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold">Explore products</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {filteredProducts.length} products available
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Sorting */}
          <div className="mb-6 flex items-center justify-end gap-2">
            <label
              htmlFor="sort-products"
              className="text-sm text-muted-foreground"
            >
              Sort by
            </label>

            <select
              id="sort-products"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              className="rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="rating">Highest rated</option>
            </select>
          </div>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed py-16 text-center">
              <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground" />

              <h3 className="mt-4 font-semibold">No products found</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Try another search term or category.
              </p>

              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </section>

        {/* Cart panel */}
        {showCart && (
          <section className="fixed inset-0 z-20 flex justify-end bg-black/40">
            <div className="flex h-full w-full max-w-md flex-col bg-background p-5 shadow-xl">
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold">Your cart</h2>

                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close cart"
                  onClick={() => setShowCart(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto py-4">
                {cart.length === 0 ? (
                  <p className="py-10 text-center text-muted-foreground">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((product, index) => (
                    <div
                      key={`${product.id}-${index}`}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {product.price.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t pt-4">
                <div className="mb-4 flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>
                    {cartTotal.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>

                <Button
                  className="w-full"
                  disabled={cart.length === 0}
                  onClick={() =>
                    alert("Checkout will be implemented in a later phase.")
                  }
                >
                  Proceed to checkout
                </Button>

                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Taxes and shipping will be calculated at checkout.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-12 border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MarketHub. Built for everyone.
        </div>
      </footer>
    </div>
  );
}

export default App;