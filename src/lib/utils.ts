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
