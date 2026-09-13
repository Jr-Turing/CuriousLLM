import clsx from "clsx";

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-content px-5 py-8 md:px-8 md:py-10", className)}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="mb-1.5 text-sm text-accent-deep">{eyebrow}</p>}
        <h1 className="font-serif text-[1.75rem] leading-tight text-ink md:text-[2.1rem]">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-[0.95rem] text-ink-soft">{description}</p>}
      </div>
      {action}
    </div>
  );
}
