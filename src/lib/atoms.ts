import { atom } from "jotai";
import { QuestionsList } from "./types";


export const currentTitleAtom = atom('');

export const titleSetsAtom = atom<string[]>([]);

export const questionsListAtom = atom<QuestionsList[]>([]);

export const currentFlashcardset = atom<QuestionsList[]>([]);
