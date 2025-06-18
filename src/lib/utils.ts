import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { QuestionsList } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleAlreadyExists(title: string): boolean {
  let titleSets = localStorage.getItem("titleSets");
  if (!titleSets) {
    localStorage.setItem("titleSets", JSON.stringify([]));
    titleSets = "[]";
  }
  const sets: string[] = JSON.parse(titleSets);
  return sets.includes(title);
}

export function addTitleToTitleSetsLocalStorage(title: string) {
  const titleSetsString = localStorage.getItem("titleSets");
  const titleSets: string[] = titleSetsString
    ? JSON.parse(titleSetsString)
    : [];
  titleSets.push(title);
  localStorage.setItem("titleSets", JSON.stringify(titleSets));

  toast.success("Created set successfully");
}

export function generateUID(): string {
  let firstPart: number | string = (Math.random() * 46656) | 0;
  let secondPart: number | string = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

export function getQuestionsListFromLocalStorage(
  title: string,
): QuestionsList[] | undefined {
  const questionsList = localStorage.getItem(title);
  if (!questionsList) {
    return;
  }

  return JSON.parse(questionsList);
}
