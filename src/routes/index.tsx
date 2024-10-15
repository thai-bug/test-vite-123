import { createFileRoute } from '@tanstack/react-router';
import MainLayout from '@/components/layouts/MainLayout';
import HomePage from '@/pages';

export const Route = createFileRoute("/")({
  component: () =>
    <MainLayout>
      <HomePage />
    </MainLayout>
});
