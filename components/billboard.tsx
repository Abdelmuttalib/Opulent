import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

export default function Billboard({ data }: BillboardProps) {
  console;
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden mb-10">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <h1 className="font-extrabold max-w-md text-5xl lg:text-8xl sm:max-w-5xl">
            {data.label}
          </h1>
        </div>
      </div>
    </div>
  );
}
