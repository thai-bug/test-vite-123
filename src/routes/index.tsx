import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "@/components/layouts/MainLayout";

export const Route = createFileRoute("/")({
  component: () => <MainLayout />,
});
