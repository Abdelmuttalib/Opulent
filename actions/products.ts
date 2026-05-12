import qs from "query-string";

import { Product } from "@/types";
import { productsData } from "@/lib/data";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = (query: Query = {}): Product[] => {
  return productsData.filter((product) => {
    const matchesCategory =
      !query.categoryId || product.category.id === query.categoryId;

    const matchesColor = !query.colorId || product.color.id === query.colorId;

    const matchesSize = !query.sizeId || product.size.id === query.sizeId;

    const matchesFeatured =
      query.isFeatured === undefined || product.isFeatured === query.isFeatured;

    return matchesCategory && matchesColor && matchesSize && matchesFeatured;
  });
};

const getProduct = (id: string): Product | undefined => {
  return productsData.find((product) => product.id === id);
};

const products = {
  getProduct,
  getProducts,
};

export default products;
