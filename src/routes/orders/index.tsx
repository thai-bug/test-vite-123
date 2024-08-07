import OrdersPage from "@/pages/order";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orders/")({
  component: () => <OrdersPage />,
});
