import Link from "next/link";

import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import actions from "@/actions";
import MainNav from "@/components/main-nav";

// #1c252d
// #161e24
// #141a1f
// #0c0c0c
// opulent

function DiscountsBar() {
  return (
    <div className="w-full flex items-center bg-[#0c0c0c] text-white h-11">
      <Container>
        <p className="text-brand-50 text-xs lg:text-sm">
          Sign up and <span className="font-medium">GET 20% OFF</span> for your
          first order.{" "}
          <span className="underline font-medium hidden sm:inline-block">
            Explore our new collections and shop now.
          </span>
        </p>
      </Container>
    </div>
  );
}

export default async function Navbar() {
  const categories = await actions.categories.getCategories();

  return (
    <div className="sticky top-0 bg-white/[0.5] backdrop-blur-md z-30">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 flex w-full justify-between h-20 items-center">
          <Link href="/" className="flex gap-x-2">
            <h3 className="font-light text-4xl text-brand hover:bg-brand hover:text-white ease-in-out duration-300">
              opulent
            </h3>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
