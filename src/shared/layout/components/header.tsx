import { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { userNavigation } from "./utils";
import { classNames } from "../../../components/classnames";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import userPng from "../../../assets/images/male.jpeg";
import { Logout } from "./logout";

interface Props {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<Props> = ({ setMobileMenuOpen }) => {
  const [logout, setLogout] = useState(false);
  return (
    <Fragment>
      <header className="w-full">
        <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6">
            <div className="flex-1 flex items-center">
              <h1
                className={
                  "font-medium text-sm sm:text-sm md:text-xl text-blue-700"
                }
              >
                <span className={"text-orange-700"}>#</span>ShortChange Admin
              </h1>
            </div>
            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
              {/* Profile dropdown */}
              <Menu as="div" className="relative flex-shrink-0">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-blue-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={userPng}
                          alt="admin"
                        />
                        <div className={"flex ml-2 flex-col items-start"}>
                          <h1 className={"text-sm"}>Administrator</h1>
                          <h1 className={"text-xs text-gray-500"}>@admin</h1>
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="px-4 py-3">
                          <p className="text-sm">Signed in as</p>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            tom@example.com
                          </p>
                        </div>

                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setLogout(true)}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                " px-4 w-full flex items-start py-2 text-sm text-red-700"
                              )}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </header>
      <Logout show={logout} setShow={setLogout} />
    </Fragment>
  );
};

export { Header };
