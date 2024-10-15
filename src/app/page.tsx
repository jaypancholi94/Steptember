"use client";

import { Greeting } from "@/components/greeting";
import { Header } from "@/components/header";
import { BodyLayout } from "@/components/layout/body";
import { CurrentStatus } from "@/components/status";
import { StepDialog } from "@/components/step-dialog";
import { TabContainer } from "@/components/tab-container";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { UserDialogBox } from "@/components/user-dialog-box";
import { RootState } from "@/store/store";
import { Plus, UserRoundPen } from "lucide-react";
import { useSelector } from "react-redux";

export default function Home() {
  const stepData = useSelector((state: RootState) => state.step.data);
  const totalSteps = useSelector((state: RootState) => state.step.total);
  const userName = useSelector((state: RootState) => state.user.name);
  const userWeight = useSelector((state: RootState) => state.user.weight);

  return (
    <div className="min-h-full">
      <Header />
      {userName && userWeight > 0 ? (
        <>
          <main className="container mx-auto h-full">
            <BodyLayout>
              <Greeting />
              <UserDialogBox
                triggerButton={
                  <DialogTrigger asChild>
                    <Button
                      className="group flex gap-1 rounded-lg cursor-pointer p-0 h-fit"
                      variant={"link"}
                    >
                      <UserRoundPen strokeWidth={3} size={14} />
                      <span className="font-semibold">Edit</span>
                    </Button>
                  </DialogTrigger>
                }
                type="edit"
              />
              <CurrentStatus
                weight={userWeight}
                totalSteps={totalSteps}
                numberOfEntries={stepData.length}
              />
              <TabContainer
                className="mt-4"
                stepData={stepData}
                weight={userWeight}
              />
            </BodyLayout>
          </main>
          <StepDialog
            triggerButton={
              <DialogTrigger asChild>
                <Button className="group fixed bottom-8 right-8 flex gap-2 rounded-lg cursor-pointer">
                  <Plus strokeWidth={3} className="group-hover:animate-spin" />
                  <span className="font-semibold">Add Step</span>
                </Button>
              </DialogTrigger>
            }
          />
        </>
      ) : (
        <UserDialogBox type="add" />
      )}
    </div>
  );
}
