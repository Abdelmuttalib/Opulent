import Container from "./ui/container";

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
                        className="hover:underline cursor-pointer"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}

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
