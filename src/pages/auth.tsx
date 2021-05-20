import FirebaseAuth from "../components/auth/FireBaseAuth";
import Link from "next/link";
import Footer from "../components/Footer";

const Auth = () => {
    return (
        <>
            <div className="flex flex-col justify-between h-screen">
                <div className="flex items-center justify-center h-full bg-gray-900">
                    <Link href="/">
                        <div>
                            <h2 className="pr-40 text-5xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500 md:text-6xl">
                                EnCluster
                            </h2>
                            <h3 className="text-5xl text-gray-100">Login</h3>
                        </div>
                    </Link>
                    <FirebaseAuth />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Auth;
