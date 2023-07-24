"use client";

import { Toaster } from "sonner";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      richColors
      expand
      visibleToasts={4}
      closeButton
    />
  );
}
