import { billboardsData } from "@/lib/data";
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = (id: string): Billboard | undefined => {
  return billboardsData.find((billboard) => billboard.id === id);
};

const billboards = {
  getBillboard,
};

export default billboards;
