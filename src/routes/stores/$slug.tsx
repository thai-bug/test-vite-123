import MainLayout from "@/components/layouts/MainLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stores/$slug")({
  component: () => <MainLayout>Hello /stores/$slug!</MainLayout>,
});
