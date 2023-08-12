import Link from "next/link";
import Container from "./ui/container";
import Image from "next/image";
import GitHubIcon from "./icons/github";

// #eaeef3
// #212121

const footerLinks = [
  {
    title: "Shop",
    links: [
      {
        label: "All Collections",
        href: "",
      },
      {
        label: "Winter Edition",
        href: "",
      },
      {
        label: "Discount",
        href: "",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "",
      },
      {
        label: "Contact",
        href: "",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "FAQs",
        href: "",
      },
      {
        label: "Privacy Policy",
        href: "",
      },
      {
        label: "Terms of Service",
        href: "",
      },
    ],
  },
];

const supportedPaymentMethods = [
  {
    name: "Visa",
  },
  {
    name: "Mastercard",
  },
  {
    name: "Paypal",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t mt-auto h-auto lg:h-[30rem] flex pt-36">
      <div className="h-full w-full items-center flex px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between w-full gap-10 h-full">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-44">
            {/* 1 */}
            <div className="lg:h-full selection:bg-brand-800 selection:text-brand">
              <h5 className="text-7xl sm:text-9xl mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-brand-200 to-brand font-light">
                opulent
              </h5>
              <p className="text-brand-700 text-lg sm:text-xl">
                Specializes in providing high-quality, stylish products for your
                wardrope
              </p>
              <div className="flex items-center gap-1 self-end mt-6">
                <h6 className="text-brand-700">Powered By</h6>
                <div className="relative w-14 h-5">
                  <Link href="https://stripe.com/">
                    <Image src="/stripe-logo.svg" alt="stripe logo" fill />
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 */}
            {/* {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <nav className="flex flex-col gap-2.5 lg:gap-5">
                  <h6 className="font-semibold text-xl text-brand-50">
                    {title}
                  </h6>
                  <ul className="flex flex-col gap-1.5 text-brand-400 text-sm whitespace-nowrap">
                    {links.map(({ label, href }) => (
                      <li
                        key={label + href}
                        // className="hover:underline cursor-pointer"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))} */}

            {/* Payments */}
            {/* <div>
                <nav className="flex flex-col gap-5">
                  <h6 className="font-semibold text-2xl text-[#1c252d] uppercase">
                    Payment Methods
                  </h6>
                  <ul className="flex flex-col gap-1.5 font-semibold text-gray-400 text-lg">
                    {supportedPaymentMethods.map(({ name }) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </nav>
              </div> */}
          </div>

          {/* @ */}
          <div className="py-6 flex justify-between items-center  text-sm">
            <p className="text-center text-brand-600">
              &copy; 2023 opulent, Inc. All rights reserved.
            </p>
            <Link
              href="https://github.com/Abdelmuttalib/Opulent"
              className="text-brand-600 hover:text-brand-400 underline decoration-2 decoration-brand-600 underline-offset-2"
            >
              {/* <GitHubIcon /> */}
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /* <Container>
        <div className="mx-auto py-10">
          <p className="text-center text-xs text-black">
            &copy; 2023 Store, Inc. All rights reserved.
          </p>
        </div>
      </Container> */
}
