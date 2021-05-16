import Head from "next/head";
import Nav from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        <div className="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
          <Nav color="transparent" showSecondaryNav={true} />
          <div className="container max-w-5xl mx-auto px-4">
            <div className="w-4/5">
              <h1 className="mt-32 pb-3 font-black text-white text-7xl">
                EnCluster
                <br />
              </h1>
              <span className="text-4xl text-gray-300">
                Share notes and resources
              </span>
            </div>
            <div className="hidden sm:block opacity-50 z-0">
              <div className="shadow-2xl w-96 h-96 rounded-full -mt-72" />
              <div className="shadow-2xl w-96 h-96 rounded-full -mt-96" />
              <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
