import Link from "next/link";
import Container from "./ui/container";
import Image from "next/image";

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
    <footer className="bg-[#0c0c0c] border-t mt-auto h-auto lg:h-96 flex pt-20">
      <div className="h-full w-full items-center flex px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between w-full gap-10 divide-y-2 divide-brand-800 h-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-44">
            {/* 1 */}
            <div className="lg:h-full">
              <h5 className="font-bold text-4xl mb-2 text-gray-100">opulent</h5>
              <p className="text-brand-400">
                Specializes in providing high-quality, stylish products for your
                wardrope
              </p>
              <div className="my-7">
                <Link
                  href="https://github.com/Abdelmuttalib/Opulent"
                  className="text-brand-500 hover:text-brand-400"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </Link>
              </div>
            </div>
            {/* 2 */}
            {footerLinks.map(({ title, links }) => (
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
            ))}
            <div className="flex items-center gap-1">
              <h6 className="text-brand-400">Powered By</h6>
              <div className="relative w-14 h-5">
                <Image src="/stripe-logo.svg" alt="stripe logo" fill />
              </div>
            </div>

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
          <div className="py-6">
            <p className="text-center text-brand-600 text-sm">
              &copy; 2023 opulent, Inc. All rights reserved.
            </p>
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
