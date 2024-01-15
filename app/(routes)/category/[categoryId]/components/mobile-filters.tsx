"use client";

import { useState, Fragment } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Color, Size } from "@/types";

import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      {/* <Transition appear show={open} as={Fragment}> */}
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity / Overlay */}
        {/* <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
        <div className="fixed inset-0 bg-brand bg-opacity-25" />
        {/* </Transition.Child> */}

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex overflow-y-auto">
          {/* <Transition.Child
              as={Fragment}
              enter="duration-300 ease-out"
              enterFrom="opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1"
              enterTo="opacity-100 translate-y-0 sm:translate-x-0"
              leave="duration-200 ease-in"
              leaveFrom="opacity-100 translate-y-0 sm:translate-x-0"
              leaveTo="opacity-0 -translate-y-1 sm:-translate-y-0 sm:-translate-x-1"
            > */}
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
          {/* </Transition.Child> */}
        </div>
      </Dialog>
      {/* </Transition> */}
    </>
  );
}
