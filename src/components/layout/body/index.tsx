import { cn } from "@/lib/utils";

type BodyLayoutProps = { className?: string; children: React.ReactNode };

const BodyLayout = ({ className, children }: BodyLayoutProps) => {
  return (
    <div className={cn("bg-accent h-full rounded-lg p-6 pb-36", className)}>
      {children}
    </div>
  );
};
export { BodyLayout };
