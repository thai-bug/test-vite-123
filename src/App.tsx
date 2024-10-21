import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFoundPage from "./pages/errors/404";
import "./index.css";
import { Spin } from "antd";


const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  defaultPendingComponent: () => (
    <div className="h-screen flex items-center justify-center">
      <Spin />
    </div>
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
