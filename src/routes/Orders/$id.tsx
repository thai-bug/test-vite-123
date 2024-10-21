import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orders/$id")({
  component: () => <div>Hello /orders/$id!</div>,
});
