import { cn, formatDate } from '@/lib/utils';
import { Calendar, FilePenLine, Footprints, Hash, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepDialog } from '@/components/step-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { StepRemoveDialog } from '../step-remove-dialog';
import { memo } from 'react';
import { AVERAGE_STEP_LENGTH } from '@/constants';

export type DataProps = { date: Date; steps: number };

type StepTableProps = {
  className?: string;
  data: DataProps[];
};

const StepTable: React.FC<StepTableProps> = memo(({ className, data }) => {
  const spacingStyle = 'py-4 border-dashed border-t-2';

  if (!data.length)
    return (
      <p className="text-center px-6 py-8 opacity-90">
        Did your legs go on vacation? 🏖️ No steps today, but there&apos;s always
        tomorrow!
      </p>
    );

  return (
    <div className="overflow-x-auto">
      <table className={cn('w-full mt-6', className)}>
        <thead>
          <tr>
            <th className="opacity-50 pb-4">
              <Hash size={18} />
            </th>
            <th className="opacity-80 pb-4">
              <Calendar size={18} />
            </th>
            <th className="opacity-80 flex justify-end pb-4">
              <div className="flex justify-end">
                <Footprints size={18} />
              </div>
            </th>
            <th className="opacity-80 text-right pb-4">
              <div className="flex justify-end">
                <Route size={18} />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={`${row.date}-${row.steps}`}>
              <td className={cn('w-[5%] opacity-50 pl-1', spacingStyle)}>
                {data.length - index}
              </td>

              <td className={cn('w-[45%] md:w-[30%] opacity-80', spacingStyle)}>
                {formatDate(row.date)}
              </td>
              <td
                className={cn(
                  'w-[25%] md:w-[20%] opacity-80 text-right',
                  spacingStyle
                )}
              >
                {row.steps.toLocaleString()}
              </td>
              <td
                className={cn(
                  'w-[15%] md:w-[20%] opacity-80 text-right',
                  spacingStyle
                )}
              >
                {((row.steps * AVERAGE_STEP_LENGTH) / 1000).toFixed(2)} km
              </td>
              <td className={cn('w-[10%]  md:w-[15%]', spacingStyle)}>
                <div className="flex gap-2 justify-center">
                  <StepDialog
                    triggerButton={
                      <DialogTrigger asChild>
                        <Button
                          variant={'ghost'}
                          className="p-0 opacity-60 hover:opacity-100"
                        >
                          <FilePenLine size={18} />
                        </Button>
                      </DialogTrigger>
                    }
                    stepIndex={index}
                  />
                  <StepRemoveDialog stepIndex={index} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

StepTable.displayName = 'StepTable';

export { StepTable };
