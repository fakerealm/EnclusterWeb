import Nav from "../components/Navbar";
export default function Home() {
  return (
    <>
      <div>
        <div className="min-h-screen overflow-auto bg-indigo-900">
          <Nav color="bg-gray-900" showSecondaryNav={true} />
          <div className="container max-w-5xl px-4 mx-auto">
            <div className="w-4/5">
              <img src="/Images/HomePageLogo.png" alt="" />
              <span className="text-4xl text-green-200">
                Share notes and resources
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
