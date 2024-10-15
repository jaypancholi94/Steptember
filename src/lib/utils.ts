import { INITIAL_STEP_STATE, INITIAL_USER_STATE } from "@/constants";
import { StepState } from "@/store/reducers/step-slice";
import { UserState } from "@/store/reducers/user-slice";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sumUpSteps = (steps: { date: Date; steps: number }[]) => {
  return steps.reduce((acc, curr) => acc + curr.steps, 0);
};

export const formatDate = (date: Date) => {
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

export const getLocalUserData = () => {
  try {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn("Local Storage is not available", { details: e });
  }

  return INITIAL_USER_STATE;
};

export const updateLocalUserData = (data: UserState) => {
  try {
    localStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    console.warn("Local Storage is not available", { details: e });
  }
};

export const getLocalStepsData = () => {
  try {
    const data = localStorage.getItem("step-data");
    if (data) {
      const steps = JSON.parse(data);
      console.log({ steps });
      return {
        data: steps.map((step: { date: string; steps: number }) => ({
          date: new Date(step.date),
          steps: step.steps,
        })),
        total: sumUpSteps(steps),
      };
    }
  } catch (e) {
    console.warn("Local Storage is not available", { details: e });
  }
  return INITIAL_STEP_STATE;
};
export const updateLocalStepsData = (data: StepState["data"]) => {
  try {
    localStorage.setItem("step-data", JSON.stringify(data));
  } catch (e) {
    console.warn("Local Storage is not available", { details: e });
  }
};
