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
                            <a>{!user ? "Register Today!" : "Logout"}</a>
                        </Link>
                    </span>
                </div>
            </div>
            <button
                onClick={() => {
                    setShowOverlay(true);
                }}
            >
                Hi
            </button>
            {showOverlay ? (
                <div className={lpstyles.overlay}>
                    <button
                        style={{
                            color: "#fff",
                        }}
                        onClick={() => {
                            setShowOverlay(false);
                        }}
                    >
                        Hi
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default HomePage;
