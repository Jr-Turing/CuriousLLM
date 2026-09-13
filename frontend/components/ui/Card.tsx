import clsx from "clsx";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-md border border-line bg-surface",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  eyebrow,
  action,
}: {
  title: string;
  eyebrow?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between border-b border-line px-5 py-4">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs text-ink-faint">{eyebrow}</p>
        )}
        <h3 className="font-serif text-lg text-ink">{title}</h3>
      </div>
      {action}
    </div>
  );
}
