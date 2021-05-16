import Nav from "../components/Navbar";
export default function Home() {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />

        <div className="min-h-screen overflow-auto bg-gradient-to-br from-indigo-900 to-green-900">
          <Nav color="transparent" showSecondaryNav={true} />
          <img
            src="/Images/Books.png"
            alt=""
            className="absolute bottom-0 right-0 max-h-44 md:max-h-80"
          />

          <div className="container max-w-5xl px-4 mx-auto">
            <div className="w-4/5">
              <h1 className="pb-3 mt-32 font-black text-white text-7xl">
                EnCluster
                <br />
              </h1>
              <span className="text-4xl text-gray-300">
                Share notes and resources
              </span>
            </div>
            <div className="z-0 hidden opacity-50 sm:block">
              <div className="rounded-full shadow-2xl w-96 h-96 -mt-72" />
              <div className="rounded-full shadow-2xl w-96 h-96 -mt-96" />
              <div className="ml-8 rounded-full shadow-xl w-80 h-80 -mt-96" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
