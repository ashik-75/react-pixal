import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <nav>
        <ul className="flex gap-5 text-lg">
          <li>
            <Link to={""}>Summary</Link>
          </li>
          <li>
            <Link to={"posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"profile"}>Profile</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;
