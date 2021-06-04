import React, { useState } from "react";
import lpstyles from "../styles/landingpage.module.css";
import Link from "next/link";
import { useUser } from "../firebase/useUser";

const HomePage = () => {
    const { user, logout } = useUser();
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    return (
        <div className={lpstyles.main}>
            <div className={lpstyles.nav}>
                <div className={lpstyles.navlogo}>
                    <Link href="/">
                        <a>
                            <span className={lpstyles.navlogoText}>
                                EnCluster
                            </span>
                        </a>
                    </Link>
                </div>
                <div className={lpstyles.navlinks}>
                    {user ? (
                        <span className={lpstyles.navlink}>Upload A File</span>
                    ) : (
                        <></>
                    )}

                    <span
                        className={lpstyles.navlogin}
                        onClick={() => {
                            logout();
                        }}
                    >
                        <Link href="/auth">
                            <a>{!user ? "Login/Register" : "Logout"}</a>
                        </Link>
                    </span>
                    <div className={lpstyles.hamburger}>
                        {!user ? (
                            <Link href="/auth">
                                <span className={lpstyles.mobileLogin}>
                                    Login/Register
                                </span>
                            </Link>
                        ) : (
                            <img
                                src="/assets/images/menu.png"
                                alt=""
                                onClick={() => {
                                    setShowOverlay(true);
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
            {showOverlay ? (
                <div className={lpstyles.overlay}>
                    <div className={lpstyles.cross}>
                        <img
                            src="/assets/images/cross.png"
                            alt=""
                            onClick={() => {
                                setShowOverlay(false);
                            }}
                        />
                    </div>
                    <div className={lpstyles.links}>
                        <div className={lpstyles.link}>
                            <span>Upload A File</span>
                        </div>
                        <div className={lpstyles.link}>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default HomePage;
