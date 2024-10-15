"use client";

import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { STEP_ERROR_INIT_VALUE } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSteps, modfiySteps } from "@/store/reducers/step-slice";
import { cn } from "@/lib/utils";
import { RootState } from "@/store/store";

type ErrorProps = { date: boolean; step: boolean };
type StepDialogProps = {
  stepIndex?: number;
  triggerButton: React.ReactNode;
};

const StepDialog: React.FC<StepDialogProps> = ({
  stepIndex,
  triggerButton,
}) => {
  const dispatch = useDispatch();
  const stepData = useSelector((state: RootState) => state.step.data);

  const [dateValue, setDateValue] = useState<string>(
    stepIndex === undefined
      ? ""
      : stepData[stepIndex].date.toISOString().split("T")[0],
  );
  const [stepValue, setStepValue] = useState<string>(
    stepIndex === undefined ? "" : stepData[stepIndex].steps.toString(),
  );
  console.log("date", dateValue);
  const [error, setError] = useState<ErrorProps>(STEP_ERROR_INIT_VALUE);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const resetAndCloseDialogBox = () => {
    setDateValue("");
    setStepValue("");
    setError(STEP_ERROR_INIT_VALUE);
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(STEP_ERROR_INIT_VALUE);

    const isWholeNumber =
      stepValue !== "" && stepValue !== undefined && /^\d+$/.test(stepValue);
    if (dateValue === "") {
      setError((oldValue) => ({ ...oldValue, date: true }));
    }
    if (!isWholeNumber) {
      setError((oldValue) => ({ ...oldValue, step: true }));
    }
    if (dateValue === "" || !isWholeNumber) return;

    const steps = parseInt(stepValue as string);
    if (stepIndex === undefined) {
      dispatch(addSteps({ date: dateValue, steps }));
    } else {
      dispatch(modfiySteps({ date: dateValue, steps, index: stepIndex }));
    }
    resetAndCloseDialogBox();
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {triggerButton}
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {stepIndex !== undefined
              ? `Add Your Steps`
              : `Time to Tweak Those Steps?`}
          </DialogTitle>
          <DialogDescription>
            <p className="font-semibold">
              Track your daily activity effortlessly!
            </p>
            <p className="opacity-60">
              {stepIndex !== undefined
                ? `you&apos;ve taken today to keep an accurate record of your fitness
              journey. Monitoring your steps helps you stay motivated and reach
              your health goals. Let&apos;s make every step count!`
                : `Missed a step? Overshot? No worries! Make your changes and step confidently into the future.`}
            </p>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row w-full my-4 gap-2">
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="date"
                className={cn(
                  "border p-2 rounded-lg h-[40px]",
                  error.date && "border-red-400",
                )}
                value={dateValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDateValue(e.target.value);
                }}
              />
              {error.date && (
                <div className="flex gap-1 items-center mt-1">
                  <Info size={16} className="text-red-400" />

                  <span className="text-red-400 font-semibold">
                    Enter valid Date
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="number"
                placeholder="steps"
                className={cn(
                  "border p-2 rounded-lg h-[40px]",
                  error.step && "border-red-400",
                )}
                value={stepValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setStepValue(e.target.value);
                }}
              />
              {error.step && (
                <div className="flex gap-1 items-center mt-1">
                  <Info size={16} className="text-red-400" />

                  <span className="text-red-400 font-semibold">
                    Enter valid step number
                  </span>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { StepDialog };
