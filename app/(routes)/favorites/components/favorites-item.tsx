import Image from "next/image";
import { toast } from "sonner";
import { Heart, X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";
import useFavorites from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

interface FavoritesItemProps {
  data: Product;
}

const FavoritesItem: React.FC<FavoritesItemProps> = ({ data }) => {
  const favorites = useFavorites();

  const onRemove = () => {
    favorites.removeItemFromFavorites(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative aspect-square flex-1 max-w-md rounded-md overflow-hidden">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6 py-4">
        <div className="absolute z-10 right-0 top-0">
          <Heart
            className="w-6 h-6 cursor-pointer fill-red-500 text-red-500"
            onClick={onRemove}
          />
        </div>
        <div className="relative pr-9 sm:grid gap-y-6 sm:gap-x-6 sm:pr-0">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold text-black">{data.name}</h2>
            <p className="text-2xl">
              <Currency value={data.price} />
            </p>
          </div>

          <div className="mt-1 flex flex-col gap-y-4 text-sm">
            <div>
              <h4 className="text-xl font-medium">Size:</h4>
              <p className="text-gray-500 text-xl">{data.size.name}</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Color:</h4>
              <p className="text-gray-500 text-xl">{data.color.name}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FavoritesItem;
