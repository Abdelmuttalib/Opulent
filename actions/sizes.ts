import { sizesData } from "@/lib/data";
import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = (): Size[] => {
  return sizesData;
};

const sizes = {
  getSizes,
};

export default sizes;
