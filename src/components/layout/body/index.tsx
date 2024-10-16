import { cn } from '@/lib/utils';
import { memo } from 'react';

type BodyLayoutProps = { className?: string; children: React.ReactNode };

const BodyLayout: React.FC<BodyLayoutProps> = memo(
  ({ className = '', children }) => {
    return (
      <div className={cn('bg-accent h-full rounded-lg p-6 pb-36', className)}>
        {children}
      </div>
    );
  }
);

BodyLayout.displayName = 'Body Layout';

export { BodyLayout };
