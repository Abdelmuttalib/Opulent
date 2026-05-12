import { colorsData } from "@/lib/data";
import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = (): Color[] => {
  return colorsData;
};
const colors = {
  getColors,
};

export default colors;
