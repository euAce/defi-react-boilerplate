import AboutPage from "@/pages/AboutPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: Index,
});

function Index() {
  return <AboutPage />;
}
