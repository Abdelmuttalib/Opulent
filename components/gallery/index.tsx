"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";
import { cn } from "@/lib/utils";
import BlurImage from "../ui/blur-image";
import { Skeleton } from "../ui/skeleton";

interface GalleryProps {
  images: Image[];
  type: "full" | "preview";
}

//  | "thumbnail" | "cart" | "checkout" | "product"

const Gallery: React.FC<GalleryProps> = ({ images = [], type }) => {
  return (
    <>
      <Tab.Group as="div" className="flex flex-col-reverse">
        {type === "preview" && (
          <div
            className={cn("mx-auto mt-6 w-full max-w-2xl lg:max-w-none", {
              "mt-3.5": type === "preview",
            })}
          >
            <Tab.List
              className={cn("grid grid-cols-4 gap-6", {
                "gap-3": type === "preview",
              })}
            >
              {images.map((image) => (
                <GalleryTab key={image.id} image={image} />
              ))}
            </Tab.List>
          </div>
        )}
        {type === "preview" && (
          <Tab.Panels className="aspect-square w-full">
            {images.map((image) => (
              <Tab.Panel key={image.id}>
                <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                  <NextImage
                    fill
                    src={image.url}
                    alt="Image"
                    className="object-cover object-center"
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        )}
      </Tab.Group>

      {type === "full" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 my-6">
          {images.map((image, indx) => (
            <div
              key={image.id}
              className="aspect-square relative h-full w-full overflow-hidden"
            >
              <BlurImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Gallery;

export function GalleryLoadingUI() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 my-6">
      {[1, 2, 3, 4].map((n, indx) => (
        <div
          key={n}
          className="aspect-square relative h-full w-full overflow-hidden"
        >
          <Skeleton className="w-full h-full rounded-none" />
        </div>
      ))}
    </div>
  );
}
