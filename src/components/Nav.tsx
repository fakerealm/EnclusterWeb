import React, { useState } from "react";

type INavbarProps = {
    color: string;
    showSecondaryNav: boolean;
};

export default function Nav(props: INavbarProps) {
    const [toggleMobile, setToggleMobile] = useState(false);
    return (
        <div className={props.color}>
            <nav>
                <div className="sticky top-0 z-50 max-w-6xl px-4 mx-auto">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* logo */}
                            <div>
                                <a
                                    href="/"
                                    className="flex items-center px-2 py-5 text-gray-100 hover:text-gray-300"
                                >
                                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500">
                                        EnCluster
                                    </span>
                                </a>
                            </div>
                            {/* primary nav */}
                            <div className="items-center hidden md:flex spacex-1">
                                <a
                                    href="#"
                                    className="px-3 py-5 text-gray-100 hover:text-gray-300"
                                >
                                    About
                                </a>
                            </div>
                        </div>
                        {props.showSecondaryNav ? (
                            /* secondary nav */
                            <div className="items-center hidden md:flex space-x-1">
                                <a
                                    href="/login"
                                    className="px-3 py-5 font-bold text-gray-100 hover:text-gray-300"
                                >
                                    Login
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-5 font-bold text-gray-100 hover:text-gray-300"
                                >
                                    Register
                                </a>
                            </div>
                        ) : (
                            <></>
                        )}
                        {/* mobile button goes here */}
                        <div className="flex items-center md:hidden lg:hidden">
                            <button
                                className="mobile-menu-button"
                                onClick={() => {
                                    setToggleMobile(!toggleMobile);
                                }}
                            >
                                <img
                                    src="assets/images/menu.png"
                                    className="object-scale-down h-12"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div
                    className={
                        toggleMobile
                            ? "mobile-menu md:hidden lg:hidden"
                            : "hidden"
                    }
                >
                    <a
                        href="#"
                        className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300 hover:bg-blue-500"
                    >
                        About
                    </a>
                    {props.showSecondaryNav ? (
                        <>
                            <a
                                href="/login"
                                className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300 hover:bg-blue-500"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300 hover:bg-blue-500"
                            >
                                Register
                            </a>
                            )
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </nav>
        </div>
    );
}
