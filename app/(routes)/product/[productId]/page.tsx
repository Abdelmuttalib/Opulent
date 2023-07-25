import Gallery from "@/components/gallery";
import Container from "@/components/ui/container";
import actions from "@/actions";
import ProductInfo from "@/components/product/product-info";
import ProductsList from "@/components/product/products-list";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await actions.products.getProduct(params.productId);

  const suggestedProducts = await actions.products.getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
            <div className="lg:col-span-2">
              <Gallery images={product.images} type="full" />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 sticky top-0">
              <ProductInfo data={product} type="full" />
            </div>
          </div>
          <hr className="my-10" />
          <ProductsList
            title="Related Items"
            products={suggestedProducts.filter(
              (suggestedProduct) => suggestedProduct.id !== product.id
            )}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
