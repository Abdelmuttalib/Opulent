// actions/get-categories.ts

import type { Category } from "@/types";
import { categoriesData } from "@/lib/data";

const getCategories = (): Category[] => {
  return categoriesData;
};

const getCategory = (id: string): Category | undefined => {
  return categoriesData.find((category) => category.id === id);
};

const categories = {
  getCategories,
  getCategory,
};

export default categories;
