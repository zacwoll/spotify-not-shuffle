import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  [
    // Layout & Display
    "inline-flex items-center justify-center gap-2",
    // Text & Typography
    "whitespace-nowrap text-sm font-medium",
    // Shape & Borders
    "rounded-md",
    // "rounded-full",
    // Transitions & Animations
    "transition-all",
    // Underline on Hover
    "underline-offset-4 hover:underline",
    // Disabled States
    "disabled:pointer-events-none disabled:opacity-50",
    // SVG Icon Handling
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    // Focus & Accessibility
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-spotify-green text-primary text-primary-foreground shadow-xs",
        outline:
          "border-2 border-spotify-green text-spotify-green shadow-xs hover:bg-spotify-green hover:text-spotify-black",
        secondary:
          "bg-spotify-gray-light text-spotify-black hover:bg-spotify-gray-dark hover:text-spotify-white shadow-xs",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function SpotifyLoginButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size}), className )}
      onClick={onClick}
      {...props}
    >
		<span>{children || "Continue with Spotify"}</span>
		<SpotifyIcon className="h-6 w-6" />
		</Comp>
  );
}

// Spotify Logo Component
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

export { SpotifyLoginButton, buttonVariants };
