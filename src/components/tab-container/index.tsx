import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS } from "@/constants";
import { StepTable } from "../step-table";

type TabContainerProps = { className?: string };
const TabContainer: React.FC<TabContainerProps> = ({ className }) => {
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
          <StepTable
            data={[
              { date: "date", stepCount: 123 },
              { date: "date", stepCount: 123 },
              { date: "date", stepCount: 123 },
              { date: "date", stepCount: 1235464 },
              { date: "date", stepCount: 123 },
            ]}
          />
        </TabsContent>
        <TabsContent value={TABS.DASHBOARD}>bye</TabsContent>
      </Tabs>
    </div>
  );
};
export { TabContainer };
