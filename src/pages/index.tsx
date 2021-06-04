import { useState } from "react";
import Link from "next/link";
import { BigButton } from "../components/Button";
import Nav from "../components/Nav";
import { useUser } from "../firebase/useUser";
import style from "../styles/home.module.css";

const HomePage = () => {
    const { user } = useUser();
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col h-screen">
                <Nav color="bg-gray-900" showSecondaryNav={true} />
                <main className="flex-1 overflow-y-auto bg-blue-50">
                    <div>
                        <div className="pt-16 mx-auto max-w-screen-lg">
                            <div className="mb-12 text-center">
                                <header className="text-center">
                                    <h1 className="font-bold text-gray-900 whitespace-pre-line leading-hero">
                                        <span className=" text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500 text-6xl">
                                            Encluster
                                        </span>
                                        <br />
                                        <span className="p-12 text-gray-700 text-2xl sm:text-3xl md:text-4xl md:text-gray-700">
                                            Share notes rapidly
                                        </span>
                                        <br />
                                    </h1>
                                    <br />
                                    <Link href={!user ? "/auth" : "/upload"}>
                                        <a>
                                            <BigButton>
                                                {!user
                                                    ? "Register Today!"
                                                    : "Upload A File"}
                                            </BigButton>
                                        </a>
                                    </Link>
                                </header>
                            </div>
                        </div>
                        <div className="px-3 mx-auto max-w-screen-lg">
                            <div className={`mb-12 text-center ${style.about}`}>
                                <img
                                    src="/assets/images/online-learning.png"
                                    alt=""
                                    className={`hidden md:block object-scale-down h-80 ${style.onlineLearningImg}`}
                                />
                                <div className="w-96">
                                    <h1 className="text-3xl">About us</h1>
                                    <p className={`text-lg ${style.about}`}>
                                        EnCluster is an open source platform
                                        aimed to make note sharing fast and
                                        easy. We aim to make it easier and
                                        faster to find and share notes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default HomePage;
