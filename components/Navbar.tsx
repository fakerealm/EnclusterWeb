export default function Nav() {
  return (
    <nav className="flex flex-col content-center w-full px-6 py-2 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
      <img src="../Images/EnCluster.png" alt="" className="max-h-20" />

      <div className="self-center sm:mb-0">
        <a
          href="#"
          className="mr-8 text-gray-700 hover:underline hover:text-gray-800"
        >
          About
        </a>
        <button className="px-4 py-2 mr-6 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-70">
          Login
        </button>
        <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-70">
          Register
        </button>
      </div>
    </nav>
  )
}
