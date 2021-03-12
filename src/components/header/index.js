import { Link } from "preact-router/match";
const Header = () => (
  <header className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-blue-700 mr-6">
      <span class="font-semibold text-xl tracking-tight">What`s Next</span>
    </div>

    <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          href="/week"
        >
          Week
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
