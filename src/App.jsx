import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedLayout from "./Layout/ProtectedLayout";
import RootLayout from "./Layout/RootLayout";
import Artist from "./pages/Artist";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Dashboard/Posts";
import Profile from "./pages/Dashboard/Profile";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="artist/" element={<Artist />} />
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
