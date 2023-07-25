"use client";

import Image from "next/image";
import { MouseEvent, MouseEventHandler } from "react";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import useFavorites from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const favorites = useFavorites();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItemToCart(data);
  };

  const isFavorite = favorites.items
    .map((favorite) => favorite.id)
    .includes(data.id);

  function onFavorite(event: MouseEvent) {
    event.stopPropagation();
    !isFavorite
      ? favorites.addItemToFavorites(data)
      : favorites.removeItemFromFavorites(data.id);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer space-y-4 w-full"
    >
      {/* Image & actions */}
      <div className="aspect-square bg-gray-100 relative rounded-md overflow-hidden">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md group-hover:scale-105 transition ease-in-out duration-300"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <div className="flex justify-between">
          <div>
            <p>{data.name}</p>
            <p className="text-lg">
              <Currency value={data?.price} />
            </p>
            {/* <p className="text-sm text-gray-500">{data.category?.name}</p> */}
          </div>
          <div className="flex items-center gap-3">
            <Heart
              className={cn("text-brand w-6 h-6 cursor-pointer", {
                "fill-red-500 text-red-500": isFavorite,
              })}
              onClick={onFavorite}
            />
            <button onClick={onAddToCart} className="bg-brand rounded p-3">
              <ShoppingCart size={24} className="text-gray-300" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
