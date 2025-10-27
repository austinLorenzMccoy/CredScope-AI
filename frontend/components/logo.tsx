export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B1E96" />
          <stop offset="60%" stopColor="#00C58E" />
          <stop offset="100%" stopColor="#FFC857" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" stroke="url(#g1)" strokeWidth="2" opacity="0.95" />
      <path
        d="M24 12c6 0 10 4 10 10s-4 10-10 10-10-4-10-10"
        stroke="url(#g1)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="14" r="2" fill="#FFC857" />
    </svg>
  )
}
