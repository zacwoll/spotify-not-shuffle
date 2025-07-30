import type { Route } from "./+types/home";
import { LandingPage } from "../landing-page/landing-page";

interface CloudflareContext {
  cloudflare: {
    env: {
      VALUE_FROM_CLOUDFLARE: string;
    };
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  const ctx = context as unknown as CloudflareContext;
  return {
    message: ctx.cloudflare.env.VALUE_FROM_CLOUDFLARE,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <LandingPage />;
}
