export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-[var(--jf-gold)]/50 sm:w-16" />
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0 text-[var(--jf-olive)]"
      >
        <path
          d="M12 2C7 4 4 8 4 13c0 4 3 7 8 9 5-2 8-5 8-9 0-5-3-9-8-11Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M12 4v18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="h-px w-10 bg-[var(--jf-gold)]/50 sm:w-16" />
    </div>
  );
}
