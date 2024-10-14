"use client";

import { AddStopIsland } from "@/components/add-step-island";
import { Greeting } from "@/components/greeting";
import { Header } from "@/components/header";
import { BodyLayout } from "@/components/layout/body";
import { CurrentStatus } from "@/components/status";
import { TabContainer } from "@/components/tab-container";
import { UserDialogBox } from "@/components/user-dialog-box";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Home() {
  const stepData = useSelector((state: RootState) => state.step.data);
  const totalSteps = useSelector((state: RootState) => state.step.total);
  const userName = useSelector((state: RootState) => state.user.name);
  const userWeight = useSelector((state: RootState) => state.user.weight);

  return (
    <div className="min-h-full">
      <Header />
      {userName && userWeight ? (
        <>
          <main className="container mx-auto h-full">
            <BodyLayout>
              <Greeting name={userName} />
              <CurrentStatus weight={userWeight} totalSteps={totalSteps} />
              <TabContainer
                className="mt-4"
                stepData={stepData}
                weight={userWeight}
              />
            </BodyLayout>
          </main>
          <AddStopIsland />
        </>
      ) : (
        <UserDialogBox />
      )}
    </div>
  );
}
