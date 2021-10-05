import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import Email from "@Contact/Email";

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
    <Disclosure as="nav" className="fixed w-screen bg-transparent">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4">
            <div className="flex items-center justify-between h-24 sm:h-36">
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
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          item.current
                            ? "underline"
                            : "text-white text-sm hover:text-purple-200 cursor-pointer",
                          "px-3 py-2 rounded-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mx-auto sm:w-1/3 sm:block">
                <div className="flex items-center justify-center">
                  <Link href="/">
                    <a className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl hover:text-purple-200 hover:line-through text-shadow-md font-monoton">
                      &lt; &nbsp; C N &nbsp; / &gt;
                    </a>
                  </Link>
                </div>
              </div>

              <div className="hidden w-1/3 sm:block">
                <div className="flex items-center justify-end space-x-6">
                  {navIcons.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classNames(
                        item.current
                          ? "underline"
                          : "text-white hover:text-purple-200 cursor-pointer",
                        "px-3 py-2 rounded-md text-2xl font-medium"
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
                    item.current ? "" : "text-white",
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
