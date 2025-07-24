// import { SpotifyLogo } from "@/components/icons"; // Assuming you have a Spotify logo component
import { Button } from "~/components/ui/button"; // Your button component or use plain button

export function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-850">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to <span className="text-green-600">!Shuffle</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Shuffle your Spotify playlists like never before.
          </p>
        </div>

        {/* Value proposition */}
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-400">
            Tired of the same old playlist order? We'll mix up your favorite
            tracks in fresh ways—so your music stays exciting.
          </p>

          {/* Steps */}
          <div className="space-y-4 rounded-lg bg-gray-100/50 p-4 dark:bg-gray-800/50">
            <p className="font-medium text-gray-900 dark:text-white">
              👉 Get started in two easy steps:
            </p>
            <ol className="list-inside list-decimal space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Log in with Spotify (we'll only access your playlists, nothing
                else).
              </li>
              <li>Pick the playlists you want shuffled.</li>
            </ol>
          </div>

          <p className="text-center text-gray-700 dark:text-gray-400">
            That's it! We'll handle the rest.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="w-full bg-green-600 py-6 text-lg font-semibold hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
        >
          <a href="/api/auth/spotify">
            {/* <SpotifyLogo className="mr-2 h-6 w-6" /> */}
            Login with Spotify
          </a>
        </Button>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          No playlists will be modified until you choose them. You can revoke
          access anytime.
        </p>
      </div>
    </main>
  );
}