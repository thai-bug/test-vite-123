import PackagesPage from "@/pages/packages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
});
