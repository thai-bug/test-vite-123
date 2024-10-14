import React from "react";
import ReactDOM from "react-dom/client";
import { createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RecoilRoot } from "recoil";
import App from "./App";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createRouter({ routeTree });

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
