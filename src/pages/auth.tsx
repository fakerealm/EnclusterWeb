import FirebaseAuth from "../components/auth/FireBaseAuth";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import firebase from "firebase";
import "firebase/auth";
import initFirebase from "../firebase/initFirebase";
initFirebase();

const Auth = () => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged((user) => {
                setIsSignedIn(!!user);
            });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
    //The reason I cannot use my useUser hook here is it causes an infinite loop of reloads
    if (!isSignedIn) {
        return (
            <>
                <main>
                    <section className="absolute w-full h-full">
                        <div
                            className="absolute top-0 w-full h-full bg-gray-900"
                            style={{
                                backgroundImage:
                                    "url(/assets/images/register_bg_2.png)",
                            }}
                        ></div>
                        <div className="container h-full px-4 mx-auto">
                            <div className="flex items-center content-center justify-center h-full">
                                <div className="w-full px-4 lg:w-4/12">
                                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
                                        <div className="px-6 py-6 rounded-t sm:px-3">
                                            <div className="mb-3 text-center">
                                                <h3 className="pb-6 text-4xl font-bold text-gray-700 font-extralight">
                                                    Sign in or register
                                                </h3>
                                            </div>
                                            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                                                <div className="mb-3 font-bold text-center text-gray-500">
                                                    <FirebaseAuth />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="https://www.github.com/EnCluster/EnClusterWeb">
                            <a className="absolute bottom-0 right-0 pb-10 pr-10 font-mono text-lg text-gray-100">
                                Our Github
                            </a>
                        </Link>
                    </section>
                </main>
            </>
        );
    } else {
        return (
            <>
                <main>
                    <section className="absolute w-full h-full">
                        <div
                            className="absolute top-0 w-full h-full bg-gray-900"
                            style={{
                                backgroundImage:
                                    "url(/assets/images/register_bg_2.png)",
                            }}
                        ></div>
                        <div className="container h-full px-4 mx-auto">
                            <div className="flex items-center content-center justify-center h-full">
                                <div className="w-full px-4 lg:w-4/12">
                                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
                                        <div className="px-6 py-6 rounded-t sm:px-3">
                                            <div className="mb-3 text-center">
                                                <Link href="/">
                                                    <h3 className="pb-6 text-4xl font-bold text-gray-700 font-extralight">
                                                        Go home
                                                    </h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="https://www.github.com/EnCluster/EnClusterWeb">
                            <a className="absolute bottom-0 right-0 pb-10 pr-10 font-mono text-4xl text-gray-100">
                                Our Github
                            </a>
                        </Link>
                    </section>
                </main>
            </>
        );
    }
};

export default Auth;
