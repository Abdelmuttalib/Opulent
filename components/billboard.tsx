import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 mb-10">
      <div className="rounded-xl bg-brand overflow-hidden relative aspect-square md:aspect-[2.4/1]">
        <div
          style={{
            // backgroundImage: `url(${data?.imageUrl})`,
            backgroundImage: `url(${data?.imageUrl})`,
            filter: "brightness(0.5)",
          }}
          className="rounded-lg absolute z-10 w-full h-full aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center backdrop-blur-sm"
        ></div>

        <div className="h-full absolute z-20 w-full flex flex-col justify-center items-center text-center gap-y-8">
          <h1 className="font-light tracking-tight uppercase max-w-md text-5xl sm:text-7xl lg:text-7xl 2xl:text-8xl md:max-w-3xl xl:max-w-5xl bg-brand text-white p-0 m-0 select-text">
            {data.label}
          </h1>
        </div>
      </div>
    </div>
  );
}
