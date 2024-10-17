import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "@/components/layouts/MainLayout";

export const Route = createFileRoute("/fulfillment/outbound/picking-job/")({
  component: () => (
    <MainLayout>Hello /fulfillment/outbound/picking-job/!</MainLayout>
  ),
});
