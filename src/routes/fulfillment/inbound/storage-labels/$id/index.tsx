import MainLayout from "@/components/layouts/MainLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/fulfillment/inbound/storage-labels/$id/"
)({
  component: () => (
    <MainLayout>Hello /fulfillment/inbound/storage-labels/$id/!</MainLayout>
  ),
});
