export default function Logo({ className = "", mark = false }) {
  if (mark) {
    return (
      <svg
        viewBox="0 0 48 48"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="10" fill="#0B0C0F" />
        <path d="M14 12L24 24L14 36" stroke="#EDECE7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 12L36 24L26 36" stroke="#4D5FFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 168 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4L14 16L4 28" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4L24 16L14 28" stroke="#4D5FFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="34"
        y="22"
        fontFamily="var(--font-bricolage), sans-serif"
        fontSize="19"
        letterSpacing="-0.02em"
        fill="currentColor"
      >
        Devlux
      </text>
    </svg>
  );
}
