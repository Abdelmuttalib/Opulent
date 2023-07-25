import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function BlurImage({ className, alt, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      alt={alt}
      className={cn(
        className,
        "duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setIsLoading(false)}
      {...props}
    />
  );
}
