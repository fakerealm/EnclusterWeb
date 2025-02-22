import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "../firebase/useUser";

type INavbarProps = {
    color: string;
};

export default function Nav(props: INavbarProps) {
    const { user, logout } = useUser();
    const [toggleMobile, setToggleMobile] = useState(false);
    return (
        <div className={props.color}>
            <nav>
                <div className="sticky top-0 z-50 max-w-6xl px-4 mx-auto">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* logo */}
                            <div>
                                <Link href="/">
                                    <a className="flex items-center px-2 py-5 text-gray-100 hover:text-gray-300">
                                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500">
                                            EnCluster
                                        </span>
                                    </a>
                                </Link>
                            </div>
                            {/* primary nav */}
                        </div>
                        {user ? (
                            <>
                                <div className="items-center hidden md:flex space-x-1 absolute right-0 pt-6 pr-3">
                                    <a
                                        className="font-bold text-gray-100 border-b-2 bored-white hover:border-b-0"
                                        onClick={logout}
                                    >
                                        Logout
                                    </a>
                                </div>
                            </>
                        ) : (
                            /* secondary nav */
                            <div className="items-center hidden md:flex space-x-1 absolute right-0 pt-6 pr-3">
                                <Link href="/auth">
                                    <a className="font-bold text-gray-100 border-b-2 bored-white hover:border-b-0">
                                        Login/Register
                                    </a>
                                </Link>
                            </div>
                        )}
                        ){/* mobile button goes here */}
                        <div className="flex items-center md:hidden lg:hidden">
                            {user ? (
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
                            ) : (
                                <a href="/auth" className="text-white">
                                    Login/Register
                                </a>
                            )}
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
                    <>
                        <a
                            className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300 hover:bg-blue-500"
                            onClick={logout}
                        >
                            Logout
                        </a>
                    </>
                </div>
            </nav>
        </div>
    );
}
