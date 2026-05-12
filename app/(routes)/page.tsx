import actions from "@/actions";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductsList from "@/components/product/products-list";
import { productsData } from "@/lib/data";

export const revalidate = 0;

export default async function Home() {
  const billboard = await actions.billboards.getBillboard("billboard-fashion");

  // const products = await actions.products.getProducts({
  //   isFeatured: true,
  // });

  // #bfbfbf

  return (
    <Container>
      <div className="space-y-10 pb-20">
        {billboard && <Billboard data={billboard} />}
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductsList title="Featured Products" products={productsData} />
      </div>
    </Container>
  );
}
