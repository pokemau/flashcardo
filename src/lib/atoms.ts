import { atom } from "jotai";
import { Question } from "./types";


export const currentTitleAtom = atom('');

export const titleSetsAtom = atom<string[]>([]);

export const questionsListAtom = atom<Question[]>([]);

export const currentFlashcardsetAtom = atom<Question[]>([]);
