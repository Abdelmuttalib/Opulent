import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";

import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productId: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItemToCart: (product) => {
        const { items: currentItems } = get();
        const isExistingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (isExistingItem) {
          return toast("Item already added to cart");
        }

        set({ items: [...currentItems, product] });
        toast.success("Item added to cart");
      },

      removeItemFromCart: (productId) => {
        const { items: currentItems } = get();
        const updatedItems = currentItems.filter(
          (item) => item.id !== productId
        );

        set({ items: updatedItems });
        toast.success("Item removed from cart");
      },

      clearCart: () => {
        set({ items: [] });
        toast.success("Cart cleared");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
