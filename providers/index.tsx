import ModalProvider from "./modal-provider";
import ToastProvider from "./toast-provider";

export default function Providers() {
  return (
    <>
      <ToastProvider />
      <ModalProvider />
    </>
  );
}
