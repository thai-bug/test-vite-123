import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RecoilRoot } from "recoil";
import { ContextProvider as ArcoContextProvider } from "@arco-design/mobile-react";
import enUS from "@arco-design/mobile-utils/esm/locale/en-US";

import "@arco-design/mobile-react/esm/style";
// import "@arco-design/web-react/dist/css/index.less"

// Create a new router instance
const router = createRouter({ routeTree });

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
    <div className="font-poppins">
      <RecoilRoot>
        <ArcoContextProvider locale={enUS}>
          <RouterProvider router={router} />
        </ArcoContextProvider>
      </RecoilRoot>
    </div>
  );
}
