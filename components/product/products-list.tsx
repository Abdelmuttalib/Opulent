import { Product } from "@/types";
import NoResults from "../no-results";
import ProductCard from "./product-card";

interface ProductsListProps {
  title: string;
  products: Product[];
}

export default function ProductsList({ title, products }: ProductsListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
