import { AddStopIsland } from "@/components/add-step-island";
import { Greeting } from "@/components/greeting";
import { Header } from "@/components/header";
import { BodyLayout } from "@/components/layout/body";
import { TabContainer } from "@/components/tab-container";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <Header />
      <main className="container mx-auto h-full">
        <BodyLayout>
          <Greeting name="Jay" />
          <TabContainer className="mt-4" />
        </BodyLayout>
      </main>
      <AddStopIsland />
    </div>
  );
}
