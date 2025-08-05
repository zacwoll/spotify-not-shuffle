import type { Route } from "./+types/home";
import { LandingPage } from "../landing-page/landing-page";

interface CloudflareContext {
  cloudflare: {
    env: {
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
    };
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "!Shuffle" },
    { name: "description", content: "Welcome to !Shuffle" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  const ctx = context as unknown as CloudflareContext;
  return {
    spotifyClientId: ctx.cloudflare.env.SPOTIFY_CLIENT_ID,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <LandingPage spotifyClientId={loaderData.spotifyClientId} />;
}
