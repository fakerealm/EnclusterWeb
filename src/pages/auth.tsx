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
                <div className="flex flex-col h-screen bg-gray-900">
                    <main className="flex-1 overflow-y-auto">
                        <div className="pt-4 mx-auto max-w-screen-lg">
                            <div className="pb-12 mb-12 text-center">
                                <Link href="/">
                                    <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500 md:text-6xl">
                                        EnCluster
                                    </h2>
                                </Link>{" "}
                                <h3 className="text-5xl text-gray-500">
                                    Login or Register
                                </h3>
                            </div>
                        </div>
                        <div className="px-3 mx-auto max-w-screen-lg pb-52">
                            <div className="mb-12 text-center">
                                <FirebaseAuth />
                            </div>
                        </div>
                        <Footer />
                    </main>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="flex flex-col h-screen bg-gray-900">
                <main className="flex-1 overflow-y-auto">
                    <div className="pt-4 mx-auto max-w-screen-lg">
                        <div className="mb-12 text-center pb-96">
                            <Link href="/">
                                <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500 md:text-6xl">
                                    EnCluster
                                    <br />
                                    Go Home
                                </h2>
                            </Link>{" "}
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default Auth;
