import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-100 p-5 xl:p-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <Link to={"/"}>
            <img className="h-8 w-8" src="/tick.png" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center gap-5">
            <li>
              <Link to={"/artist"} className="tracking-wider">
                Artist
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
