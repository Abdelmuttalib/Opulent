"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";

import useFavorites from "@/hooks/use-favorites";
import FavoritesItem from "./components/favorites-item";

export const revalidate = 0;

const FavoritesPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const favorites = useFavorites();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-black">Favorites</h1>
          <div className="mt-12 lg:grid lg:items-start gap-x-12">
            <div>
              {favorites.items.length === 0 && (
                <p className="text-neutral-500">No items added to favorites.</p>
              )}
              <ul>
                {favorites.items.map((item) => (
                  <FavoritesItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FavoritesPage;
