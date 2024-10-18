import MainLayout from "@/components/layouts/MainLayout";
import StorageLabelDetail from "@/pages/fulfillments/Inbound/components/storage-labels/Detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/fulfillment/inbound/storage-labels/$code/"
)({
  component: () => (
    <MainLayout>
      <StorageLabelDetail />
    </MainLayout>
  ),
});
