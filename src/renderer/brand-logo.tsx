import { useId } from "react";

/** The GAMEORA app icon from build/logo.svg. */
export function BrandLogo({ size = 24 }: { size?: number }) {
  const gradient = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 280 280"
      fill="none"
      aria-hidden="true"
      className="brand-logo"
    >
      <BrandLogoArt gradient={gradient} />
    </svg>
  );
}

/**
 * The icon's shapes in a 280-unit square, for drawing it inside another SVG
 * such as an exported image. `gradient` must be unique in that SVG.
 */
export function BrandLogoArt({ gradient }: { gradient: string }) {
  const glow = `${gradient}-glow`;
  return (
    <>
      <rect width="280" height="280" rx="64" fill={`url(#${glow})`} />
      <path
        d="M193.74 92.26A76 76 0 1 0 216 146H148"
        stroke={`url(#${gradient})`}
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M222 40Q225 59 244 62Q225 65 222 84Q219 65 200 62Q219 59 222 40Z" fill="#FFFFFF" />
      <defs>
        <linearGradient id={gradient} x1="60" y1="60" x2="225" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="0.55" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <radialGradient id={glow} cx="140" cy="146" r="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E1B4B" />
          <stop offset="1" stopColor="#0B0E17" />
        </radialGradient>
      </defs>
    </>
  );
}
