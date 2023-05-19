import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

function ProtectedLayout() {
  return (
    <div>
      <SignedIn>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </SignedIn>

      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}

export default ProtectedLayout;
