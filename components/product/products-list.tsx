import { Product } from "@/types";
import NoResults from "../no-results";
import ProductCard from "./product-card";
import { Skeleton } from "../ui/skeleton";

interface ProductsListProps {
  title: string;
  products: Product[];
}

export default function ProductsList({ title, products }: ProductsListProps) {
  if (products.length === 0) return null;

  return (
    <div className="space-y-4 py-16">
      <h3 className="text-3xl font-normal w-fit text-brand hover:bg-brand hover:text-white ease-in-out duration-300">
        {title}
      </h3>
      <div className="pt-10">{products.length === 0 && <NoResults />}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-14 sm:gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export function ProductsListLoadingUI() {
  return (
    <div className="space-y-4 py-16">
      <Skeleton className="w-72 h-9" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-14 sm:gap-4">
        {[1, 2, 3, 4].map((n) => (
          <Skeleton key={n} className="w-full aspect-square" />
        ))}
      </div>
    </div>
  );
}
