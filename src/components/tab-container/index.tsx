import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TABS } from '@/constants';
import { StepTable } from '@/components/step-table';

import type { DataProps } from '@/components/step-table';
import { CaloriesBurnt } from '@/components/charts/calories-burnt';
import { StepChart } from '../charts/steps';
import { memo } from 'react';

type TabContainerProps = {
  className?: string;
  stepData: DataProps[];
  weight: number;
};
const TabContainer: React.FC<TabContainerProps> = memo(
  ({ className, stepData, weight }) => {
    return (
      <div className={className}>
        <Tabs defaultValue={TABS.STEPS}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger className="capitalize" value={TABS.STEPS}>
              {TABS.STEPS}
            </TabsTrigger>
            <TabsTrigger className="capitalize" value={TABS.DASHBOARD}>
              {TABS.DASHBOARD}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={TABS.STEPS}>
            <StepTable data={stepData} />
          </TabsContent>
          <TabsContent value={TABS.DASHBOARD}>
            <div className="mt-4">
              <StepChart data={stepData} />
              <CaloriesBurnt data={stepData} weight={weight} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
);

TabContainer.displayName = 'TabContainer';
export { TabContainer };
