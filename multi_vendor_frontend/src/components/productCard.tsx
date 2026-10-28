import { Star, ShoppingCart } from "lucide-react";

import { Badge } from "../../@/components/ui/badge";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../@/components/ui/card";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />

        <Badge className="absolute left-3 top-3">
          {product.category}
        </Badge>
      </div>

      <CardContent className="space-y-3 p-4">
        <div>
          <p className="text-xs text-muted-foreground">
            Sold by {product.vendorName}
          </p>

          <h3 className="mt-1 font-semibold">
            {product.name}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          </span>

          <span className="text-xs text-muted-foreground">
            {product.stock > 0
              ? `${product.stock} in stock`
              : "Out of stock"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          disabled={product.stock === 0}
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;