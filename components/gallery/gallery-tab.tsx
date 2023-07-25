import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";
import BlurImage from "../ui/blur-image";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <BlurImage
              fill
              src={image.url}
              alt=""
              className={cn("object-cover object-center", {
                "opacity-100": selected,
                "opacity-70": !selected,
              })}
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;

// const BlurImage = ({ id, name, href, username, imageSrc }: ImageT) => {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <a href={href} className="group">
//       <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 relative">
//         <Image
//           src={imageSrc}
//           alt=""
//           layout="fill"
//           objectFit="cover"
//           className={cn(
//             "group-hover:opacity-75 duration-700 ease-in-out",
//             isLoading
//               ? "grayscale blur-2xl scale-110"
//               : "grayscale-0 blur-0 scale-100"
//           )}
//           onLoadingComplete={() => setIsLoading(false)}
//         />
//       </div>

//       <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
//       <p className="mt-1 text-lg font-medium text-gray-900">@{username}</p>
//     </a>
//   );
// };
