import BuyPage from "@/pages/buy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buy")({
  component: BuyPage,
});
