import { Outlet } from "react-router-dom";
import Header from "./Header";

function RootLayout() {
  return (
    <div>
      <Header />

      <main>
        <div className="mx-auto max-w-7xl p-5 xl:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
