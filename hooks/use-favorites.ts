import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";

import { Product } from "@/types";

interface FavoritesStore {
  items: Product[];
  addItemToFavorites: (product: Product) => void;
  removeItemFromFavorites: (productId: string) => void;
  clearFavorites: () => void;
}

const useFavorites = create(
  persist<FavoritesStore>(
    (set, get) => ({
      items: [],
      addItemToFavorites: (product) => {
        const { items: currentItems } = get();
        const isExistingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (isExistingItem) {
          return toast("Item already added to favorites");
        }

        set({ items: [...currentItems, product] });
        toast.success("Item added to favorites");
      },

      removeItemFromFavorites: (productId) => {
        const { items: currentItems } = get();
        const updatedItems = currentItems.filter(
          (item) => item.id !== productId
        );

        set({ items: updatedItems });
        toast.success("Item removed from favorites");
      },

      clearFavorites: () => {
        set({ items: [] });
        toast.success("Favorites cleared");
      },
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavorites;
