import Link from "next/link";
import { VerticalFeatureRow } from "../components/VerticalFeatureRow";
import { BigButton } from "../components/Button";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useUser } from "../firebase/useUser";

const HomePage = () => {
    const { user, logout } = useUser();
    return (
        <>
            <div className="flex flex-col h-screen">
                <Nav color="bg-gray-900" showSecondaryNav={true} />
                <main className="flex-1 overflow-y-auto">
                    <div className="bg-blue-50">
                        <div className="pt-16 mx-auto max-w-screen-lg">
                            <div className="mb-12 text-center">
                                <header className="text-center">
                                    <h1 className="font-bold text-gray-900 whitespace-pre-line leading-hero">
                                        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-500 md:text-6xl">
                                            Encluster
                                        </span>
                                        <br />
                                        <span className="text-xs text-gray-700 md:text-4xl sm:text-2xl">
                                            The best way to share notes and
                                            resources
                                        </span>
                                        <br />
                                    </h1>
                                    <br />
                                    <Link href={!user ? "/register" : "/"}>
                                        <a>
                                            <BigButton>
                                                {!user
                                                    ? "Register Today!"
                                                    : "Create an organization"}
                                            </BigButton>
                                        </a>
                                    </Link>
                                </header>
                            </div>
                        </div>
                        <div className="px-3 pb-20 mx-auto max-w-screen-lg">
                            <div className="mb-12 text-center">
                                <VerticalFeatureRow
                                    title="About EnCluster"
                                    description="Encluster is an open source app that allows you to share your notes and resources. Perfect for students of all grades, you can both view the notes uploaded by others and share your own. Free for all!"
                                    image="/assets/images/feature.png"
                                    imageAlt="First feature alt text"
                                />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default HomePage;
