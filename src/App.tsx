import { LocaleProvider, Spin } from "@douyinfe/semi-ui";
import en_GB from "@douyinfe/semi-ui/lib/es/locale/source/en_GB";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFoundPage from "./pages/errors/404";

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
      <LocaleProvider locale={en_GB}>
        <RouterProvider router={router} />
      </LocaleProvider>
    </>
  );
}

export default App;
