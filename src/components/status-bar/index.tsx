import { cn } from '@/lib/utils';
import { ChartLine, FootprintsIcon, Route, Weight } from 'lucide-react';
import { memo } from 'react';
import CountUp from 'react-countup';
import { useMemo } from 'react';
import { AVERAGE_STEP_LENGTH } from '@/constants';

type CurrentStatusBarProps = {
  weight: number;
  totalSteps: number;
  numberOfEntries: number;
};

type StatusCardProps = {
  title: string;
  value: number;
  unit?: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  className?: string;
};

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  unit,
  Icon,
  className,
}) => (
  <div className={cn('bg-orange-200 rounded-lg p-6 flex flex-col', className)}>
    <p>{title}</p>
    <div className="flex items-end gap-1">
      <div className="flex items-center gap-1">
        <Icon strokeWidth={2} />
        <CountUp
          start={0}
          end={value}
          duration={2.75}
          className="font-semibold text-4xl"
          decimals={value % 1 !== 0 ? 2 : 0}
        />
      </div>
      {unit && <span>{unit}</span>}
    </div>
  </div>
);

const CurrentStatusBar: React.FC<CurrentStatusBarProps> = memo(
  ({ weight, totalSteps, numberOfEntries }) => {
    const averageSteps = useMemo(
      () => totalSteps / numberOfEntries,
      [totalSteps, numberOfEntries]
    );
    const totalDistanceTravelled = useMemo(
      () => (totalSteps * AVERAGE_STEP_LENGTH) / 1000,
      [totalSteps]
    );

    return (
      <div className="flex flex-col md:flex-row gap-2 my-4">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <StatusCard
            title="Weight"
            value={weight}
            unit="kg"
            Icon={Weight}
            className="w-full "
          />
          <StatusCard
            title="Total Steps"
            value={totalSteps}
            Icon={FootprintsIcon}
            className="w-full "
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <StatusCard
            title="Average Step Count"
            value={averageSteps}
            Icon={ChartLine}
            className="w-full "
          />
          <StatusCard
            title="Total Distance Travelled"
            value={totalDistanceTravelled}
            Icon={Route}
            unit="km"
            className="w-full "
          />
        </div>
      </div>
    );
  }
);

CurrentStatusBar.displayName = 'CurrentStatusBar';

export { CurrentStatusBar };
