import MainLayout from "@/components/layouts/MainLayout";
import StorageDetail from "@/pages/fulfillment/inbound/storages/detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fulfillment/inbound/storages/$code")({
  component: () => (
    <MainLayout>
      <StorageDetail />
    </MainLayout>
  ),
});
