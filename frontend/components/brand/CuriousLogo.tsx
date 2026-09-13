interface CuriousLogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

export function CuriousLogo({
  size = 28,
  withWordmark = true,
  className = "",
}: CuriousLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 3 L28 9.5 V22.5 L16 29 L4 22.5 V9.5 Z"
          stroke="#1B2430"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M16 3 V16 M16 16 L28 9.5 M16 16 L4 9.5 M16 16 V29"
          stroke="#1B2430"
          strokeWidth="1"
          opacity="0.35"
        />
        <circle cx="16" cy="16" r="3.2" fill="#C1791F" />
      </svg>
      {withWordmark && (
        <span className="font-serif text-[1.2rem] font-medium tracking-tight text-ink">
          Curious AI
        </span>
      )}
    </span>
  );
}
