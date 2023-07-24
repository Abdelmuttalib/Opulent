import actions from "@/actions";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductsList from "@/components/product/products-list";

export const revalidate = 0;

export default async function Home() {
  const billboard = await actions.billboards.getBillboard(
    "810f6154-c462-45ed-8250-04bc5d6e8be1"
  );

  const products = await actions.products.getProducts({
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-20">
        <Billboard data={billboard} />
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductsList title="Featured Products" products={products} />
      </div>
    </Container>
  );
}
