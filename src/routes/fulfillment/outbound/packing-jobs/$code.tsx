import MainLayout from "@/components/layouts/MainLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/fulfillment/outbound/packing-jobs/$code"
)({
  component: () => (
    <MainLayout>Hello /fulfillment/outbound/packing-jobs/$code!</MainLayout>
  ),
});
