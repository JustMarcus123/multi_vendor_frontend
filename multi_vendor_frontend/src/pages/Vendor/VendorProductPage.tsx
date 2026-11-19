import { useEffect, useState, type FormEvent } from "react";
import { ImagePlus, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { products as initialProducts } from "@/data/products";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductCategory } from "@/lib/ProductCategory";
import { createProductApi } from "@/components/Service/productApi";

export default function VendorProductsPage() {
  const [items, setItems] = useState<Product[]>(initialProducts.slice(0, 5));
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState("");
const [stock, setStock] = useState("");
const [showPreview, setShowPreview] = useState(false);
// Generate a temporary local URL to preview the selected image
useEffect(() => {
  if (!showPreview) {
    setPreviewUrls([]);
    return;
  }

  const urls = images.map((file) => URL.createObjectURL(file));
  setPreviewUrls(urls);

  return () => urls.forEach((url) => URL.revokeObjectURL(url));
}, [images, showPreview]);

const handleImageChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
     const selected = Array.from(e.target.files ?? []);
  setImages(selected.slice(0, 5));
}

async function handleProductSave(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const fd = new FormData();
  fd.append("name", name);
  fd.append("description", description);
  fd.append("price", price);
  fd.append("stock", stock);
  images.forEach((file) => fd.append("images", file));

  try {
    await createProductApi(fd); // from your authApi/productApi file
    // reset the form, refetch the list, close the form...
    setShowForm(false);
    setImages([]);
  } catch (error) {
    console.error(error);
  }
}



  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  

  function deleteProduct(id: number) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1 className="section-title">My products</h1>
          <p className="mt-2 text-sm text-slate-500">
            Add and manage the products listed in your store.
          </p>
        </div>
        <Button onClick={() => setShowForm((value) => !value)}>
          <Plus size={16} /> Add product
        </Button>
      </div>
      {showForm && (
        <form
          onSubmit={handleProductSave}
          className="mb-6 rounded-2xl border border-indigo-100 bg-white p-5"
        >
          <h2 className="font-black">Add a product</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="productName">
                Product name
              </label>
              <input
                id="productName"
                className="field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="productPrice">
                Price (₹)
              </label>
              <input
                id="productPrice"
                className="field"
                type="number"
                min="1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="productCategory">
                Category
              </label>
              <select
                id="productCategory"
                className="field"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                  <option value="" disabled>Select a category</option>
               {  ProductCategory.map((item)=>(
                <option key={item.id} value={item.value} >
                    {item.value}
                </option>
               ))     }
              </select>
            </div>
            <div>
              <label className="label" htmlFor="productImage">
                Image URL (optional)
              </label>
              <input
                id="productImage"
                className="field"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handleImageChange}
               
              />
    {images.length > 0 && (
  <div className="mt-2">
    <p className="text-sm text-slate-500">
      {images.length} image{images.length > 1 ? "s" : ""} selected
    </p>

    <button
      type="button"
      onClick={() => setShowPreview((prev) => !prev)}
      className="mt-1 text-sm font-semibold text-indigo-600 hover:underline"
    >
      {showPreview ? "Hide preview" : "Show preview"}
    </button>

    {showPreview && (
      <div className="mt-3 flex flex-wrap gap-3">
        {previewUrls.map((url, i) => (
          <img
            key={url}
            src={url}
            alt={`Preview ${i + 1}`}
            className="h-24 w-24 rounded-lg border border-slate-200 object-cover"
          />
        ))}
      </div>
    )}
  </div>
)}
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button type="submit">
              <Plus size={15} /> Save product
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
      <div className="mb-4 relative max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          className="field pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your products..."
        />
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Stock</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-t border-slate-100">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt=""
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <span className="font-bold">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-500">{item.category}</td>
                  <td className="px-5 py-4 font-semibold">
                    {formatPrice(item.price)}
                  </td>
                  <td className="px-5 py-4">{item.stock}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`badge ${item.stock < 10 ? "badge-amber" : "badge-green"}`}
                    >
                      {item.stock < 10 ? "Low stock" : "Active"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1">
                      <button
                        className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100"
                        title="Edit product (demo only)"
                        onClick={() =>
                          alert(
                            "Product editing will be added in the next iteration.",
                          )
                        }
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        className="grid h-8 w-8 place-items-center rounded-lg text-rose-500 hover:bg-rose-50"
                        title="Delete product"
                        onClick={() => deleteProduct(item.id)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredItems.length === 0 && (
          <div className="p-10 text-center text-sm text-slate-500">
            No products match your search.
          </div>
        )}
      </div>
    </div>
  );
}
