"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "./gallery";
import ProductInfo from "./product/product-info";
import Modal from "./ui/modal";

export default function PreviewModal() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-6">
          <Gallery images={product.images} type="preview" />
        </div>
        <div className="sm:col-span-8 lg:col-span-6">
          <ProductInfo data={product} type="preview" />
        </div>
      </div>
    </Modal>
  );
}
