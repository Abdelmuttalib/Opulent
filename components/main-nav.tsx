"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden sm:flex text-sm md:text-base">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:bg-brand hover:text-white ease-in-out duration-300 px-1",
            route.active
              ? "text-white bg-brand underline decoration-2 decoration-brand underline-offset-4"
              : "text-brand"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
