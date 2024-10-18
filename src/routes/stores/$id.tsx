import MainLayout from "@/components/layouts/MainLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stores/$id")({
  component: () => <MainLayout>Hello /stores/$id!</MainLayout>,
});
