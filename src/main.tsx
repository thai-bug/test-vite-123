import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RecoilRoot } from "recoil";
import { ContextProvider as ArcoContextProvider } from "@arco-design/mobile-react";
import enUS from "@arco-design/mobile-utils/esm/locale/en-US";

import "@arco-design/mobile-react/esm/style";
import "./index.css";

const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <div className="font-poppins max-w-lg mx-auto">
      <RecoilRoot>
        <ArcoContextProvider locale={enUS}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ArcoContextProvider>
      </RecoilRoot>
    </div>
  );
}
