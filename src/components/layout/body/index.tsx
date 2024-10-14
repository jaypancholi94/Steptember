import { cn } from "@/lib/utils";

type BodyLayoutProps = { className?: string; children: React.ReactNode };

const BodyLayout = ({ className, children }: BodyLayoutProps) => {
  return (
    <div className={cn("bg-accent h-full rounded-t-lg p-6", className)}>
      {children}
    </div>
  );
};
export { BodyLayout };
