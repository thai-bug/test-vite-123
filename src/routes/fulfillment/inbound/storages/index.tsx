import MainLayout from "@/components/layouts/MainLayout";
// import StoragesPage from "@/pages/fulfillments/inbound/storages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fulfillment/inbound/storages/")({
  component: () => <MainLayout>{/* <StoragesPage /> */}</MainLayout>,
});
