import { SpotifyLoginButton } from "~/components/ui/spotify-login-button";

interface LandingPageProps {
  spotifyClientId: string;
}

export function LandingPage({ spotifyClientId }: LandingPageProps) {
  const handleSpotifyAuth = () => {
    const redirectUri = `${window.location.origin}/auth/callback`;
    const scopes = [
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-read-private'
    ].join(' ');

    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('client_id', spotifyClientId);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('scope', scopes);
    authUrl.searchParams.append('state', Math.random().toString(36).substring(7));

    window.location.href = authUrl.toString();
  };

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
        <SpotifyLoginButton
          className="w-full"
          onClick={handleSpotifyAuth}
        >
          Login with Spotify
        </SpotifyLoginButton>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          No playlists will be modified until you choose them. You can revoke
          access anytime.
        </p>
      </div>
    </main>
  );
}