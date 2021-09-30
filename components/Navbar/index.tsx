import Link from 'next/link';
import { Disclosure } from "@headlessui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import Email from "@components/Email";

const navigation = [
  { name: "portfolio", href: "/portfolio", current: false },
  { name: "about", href: "/about", current: false },
  { name: "contact", href: "/contact", current: false },
];

const navIcons = [
  {
    name: "GitHub",
    icon: <AiFillGithub />,
    href: "https://github.com/cordenbrock",
    current: false,
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/corynordenbrock/",
    current: false,
  },
  {
    name: "Email",
    icon: <Email />,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed w-screen bg-black">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4">
            <div className="relative flex items-center justify-between h-48">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaBeer className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <FaBeer className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden w-1/3 sm:block">
                <div className="flex space-x-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-purple-200"
                          : "text-white hover:text-purple-200 cursor-pointer",
                        "px-3 py-2 rounded-md font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden w-1/3 sm:block">
                <div className="flex items-center justify-center">
                  {/* <a className="lg:hidden" href="/">
                    <h1 className="text-5xl text-black font-logo">
                      &lt; &nbsp; C N &nbsp; / &gt;
                    </h1>
                  </a> */}
                  <a
                    className="text-6xl text-white text-shadow-md font-logo"
                    href="/"
                  >
                    &lt; &nbsp; C N &nbsp; / &gt;
                  </a>
                </div>
              </div>

              <div className="hidden w-1/3 sm:block">
                <div className="flex items-center justify-end space-x-8">
                  {navIcons.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferral"
                      className={classNames(
                        item.current
                          ? "text-purple-200"
                          : "text-white hover:text-purple-200 cursor-pointer",
                        "px-3 py-2 rounded-md text-3xl font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-white"
                      : "text-white hover:bg-white hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
