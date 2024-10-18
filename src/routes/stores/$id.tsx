import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stores/$id")({
  component: () => <div>Hello /stores/$id!</div>,
});
