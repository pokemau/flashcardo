import { atom } from "jotai";
import { Question } from "./types";


export const currentTitleAtom = atom('');

export const titleSetsAtom = atom<string[]>([]);

export const questionsListAtom = atom<Question[]>([]);

export const currentFlashcardsetAtom = atom<Question[]>([]);

export const currItemNumberAtom = atom<number>(0);
export const currItemAtom = atom<Question>();
export const showAnswerAtom = atom<boolean>(false);
