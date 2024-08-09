/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from "@/pages/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
  beforeLoad: ({ search }) => {
    const { accessToken }: any = search;
    sessionStorage.setItem("accessToken", accessToken);
  },
});
