"use client";

import { Heart, HeartOff, ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import useFavorites from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

interface ProductInfoProps {
  data: Product;
  type: "full" | "preview";
}

export default function ProductInfo({ data, type = "full" }: ProductInfoProps) {
  const cart = useCart();
  const favorites = useFavorites();

  const onAddToCart = () => {
    cart.addItemToCart(data);
  };

  const isFavorite = favorites.items
    .map((favorite) => favorite.id)
    .includes(data.id);

  function onFavorite() {
    !isFavorite
      ? favorites.addItemToFavorites(data)
      : favorites.removeItemFromFavorites(data.id);
  }

  return (
    <div
      className={cn("lg:py-6 flex flex-col gap-y-4", {
        "gap-y-0": type === "preview",
      })}
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl text-brand-900 uppercase font-sans">
          {data.name}
        </h1>
        <Heart
          className={cn("text-brand w-6 h-6 cursor-pointer", {
            "fill-red-500 text-red-500": isFavorite,
          })}
          onClick={onFavorite}
        />
      </div>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-x-4">
          <h3 className="text-brand lg:text-lg uppercase">Size:</h3>
          {/* <div>{data?.size?.value}</div> */}
          <div className="flex gap-3">
            {/* <div className="">{data?.size?.value}</div> */}
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={cn(
                  "w-[70px] h-16 bg-white border border-brand-100/80",
                  {
                    "border-brand-900": data?.size?.value === size,
                    "opacity-50 bg-brand-50/50": data?.size?.value !== size,
                  }
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-x-4">
          <h3 className="text-brand lg:text-lg uppercase">Color:</h3>
          <div className="px-3 py-3 w-fit flex items-center gap-x-2 border border-brand-300">
            <div
              className="h-7 w-7 border border-gray-600"
              style={{ backgroundColor: data?.color?.value }}
            />
            <span>{data?.color?.name}</span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 w-full lg:text-lg"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export function ProductInfoLoadingUI() {
  return (
    <div className={cn("lg:py-6 flex flex-col gap-y-4")}>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 uppercase">
          <Skeleton className="w-64 h-9" />
        </h1>
        <Skeleton className="w-8 h-8 rounded" />
      </div>
      <div className="mt-3 flex">
        <p className="text-2xl text-gray-900">
          <Skeleton className="w-16 h-9" />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-x-4">
          <h3 className="font-semibold text-black lg:text-lg uppercase">
            Size:
          </h3>
          {/* <div>{data?.size?.value}</div> */}
          <div className="flex gap-3">
            {/* <div className="">{data?.size?.value}</div> */}
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <Skeleton
                key={size}
                className="w-[70px] h-16 rounded-none"
              ></Skeleton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-x-4">
          <h3 className="font-semibold text-black lg:text-lg uppercase">
            Color:
          </h3>
          <div className="px-4 py-3 w-32 flex items-center gap-x-2 border border-brand-300">
            <Skeleton className="h-7 w-7 rounded-none" />
            <span>
              <Skeleton className="w-16 h-9 rounded-none" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Skeleton className="w-full h-12 rounded-none" />
      </div>
    </div>
  );
}
