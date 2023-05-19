import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Artist from "./pages/Artist";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="artist/" element={<Artist />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
