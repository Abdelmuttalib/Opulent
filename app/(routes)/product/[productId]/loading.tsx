import Container from "@/components/ui/container";
import { GalleryLoadingUI } from "@/components/gallery";
import { ProductInfoLoadingUI } from "@/components/product/product-info";
import { ProductsListLoadingUI } from "@/components/product/products-list";

export default function Loading() {
  return <ProductPageLoadingUI />;
}

function ProductPageLoadingUI() {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
            <div className="lg:col-span-2">
              {/* Gallery */}
              <GalleryLoadingUI />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 sticky top-0">
              {/* <ProductInfo data={product} type="full" /> */}
              <ProductInfoLoadingUI />
            </div>
          </div>
          <hr className="my-10" />
          <ProductsListLoadingUI />
        </div>
      </Container>
    </div>
  );
}
