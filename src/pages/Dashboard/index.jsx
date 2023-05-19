import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <nav>
        <ul className="flex gap-5 text-lg">
          <li>
            <Link to={"posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
