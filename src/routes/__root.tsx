import { createFileRoute, createRootRoute, Outlet, RootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <Outlet />,
});
