import { createFileRoute } from "@tanstack/react-router";
// import StorageLabels from "@/pages/fulfillments/inbound/storage-labels";
import MainLayout from "@/components/layouts/MainLayout";

export const Route = createFileRoute("/fulfillment/inbound/storage-labels/")({
  component: () => <MainLayout>{/* <StorageLabels /> */}</MainLayout>,
});
