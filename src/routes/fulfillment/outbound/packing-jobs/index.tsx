import MainLayout from "@/components/layouts/MainLayout";
import PackingJobsPage from "@/pages/fulfillment/outbound/packing-jobs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fulfillment/outbound/packing-jobs/")({
  component: () => (
    <MainLayout>
      <PackingJobsPage />
    </MainLayout>
  ),
});
