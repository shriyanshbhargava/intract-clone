import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiSearch } from "react-icons/bi";
import clsx from "clsx";
import { useState, useRef } from "react";
import "./Navbar.css";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const navigation = [
  { name: "Compass", href: "#", current: false },
  { name: "Explore", href: "#", current: false },
  { name: "Academy", href: "#", current: true, isNew: true },
  { name: "NFTs", href: "#", current: false },
  { name: "For Projects", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarSearch() {
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    if (inputRef.current && inputRef.current.value.trim() === "") {
      setInputFocused(false);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 w-full h-[64px] backdrop-filter backdrop-blur-[5px] border-b-[1px] px-4 sm:px-[100px] z-10 border-[rgba(255,_255,_255,_.15)] z-50"
    >
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
            {/* Mobile menu buttons */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white bg-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-open:hidden text-white"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-open:block text-white"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <div className="flex flex-shrink-0 items-center ">
              <img
                alt="Your Company"
                src="https://intract-clone.vercel.app/static/media/intract_text.6576a0615b2ebcce04ada222e4e8e460.svg"
                className="md:h-6 w-auto h-4 md:mr-0 mr-[10rem]"
              />
            </div>
            <div
              className={clsx("hidden sm:flex relative flex space-x-4 ml-6", {
                "hidden-navigation": inputFocused,
              })}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-white relative block rounded-md px-3 py-2 text-sm font-medium"
                      : "text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name === "Academy" && item.isNew ? (
                    <div className="flex">
                      <div className="mx-2">Academy</div>
                      <div className="text-white bg-[#6833e7] font-bold text-[12px] pt-[3px] px-2 rounded-lg">
                        New
                      </div>
                    </div>
                  ) : (
                    item.name
                  )}
                  {item.current && (
                    <span className="absolute bottom-[-10px] left-0 w-full h-[4px] rounded-[2rem] bg-[#fff]" />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div
            className={clsx(
              "hidden sm:flex w-[25rem] rounded-full border-[1px] border-solid border-[rgba(255,255,255,.05)] bg-[rgba(255,_255,_255,_.07)] h-[42.5px] px-[20px] py-[10px] items-center relative InputExpand",
              { expanded: inputFocused }
            )}
          >
            <BiSearch />
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc,."
              className={clsx(
                "w-full bg-transparent py-1.5 px-3 text-sm text-white outline-none"
              )}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputRef}
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="w-[42.5px] h-[42.5px] backdrop-filter backdrop-blur-md bg-[rgba(60,_32,_140,_.2)] flex items-center justify-center border-[1px] border-[solid] border-[#fa8922] rounded-[100%] relative cursor-pointer"
            >
             <PiTelevisionSimpleBold />

            </button>

            <span className="text-[#000] whitespace-nowrap bg-[#fff] rounded-[4px] px-[24px] py-[7px] text-[15px] ml-5 font-medium">
              Sign In
            </span>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 md:bg-none bg-black">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name === "Academy" && item.isNew ? (
                <div className="flex">
                  <div className="mx-2">Academy</div>
                  <div className="text-white bg-[#6833e7] text-[12px] px-2 rounded-lg">
                    New
                  </div>
                </div>
              ) : (
                item.name
              )}
            </DisclosureButton>
          ))}
        </div>
        <div className="px-2 pt-2 pb-3">
          <div
            className={clsx(
              "w-full flex rounded-full border-[1px] border-solid border-[rgba(255,255,255,.05)] bg-[rgba(255,_255,_255,_.07)] h-[42.5px] px-[20px] py-[10px] items-center relative InputExpand",
              { expanded: inputFocused }
            )}
          >
            <BiSearch />
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc,."
              className={clsx(
                "w-full bg-transparent py-1.5 px-3  text-sm text-white outline-none"
              )}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputRef}
            />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
