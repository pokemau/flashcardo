import { atom } from "jotai";
import { QuestionsList } from "./types";


export const titleAtom = atom('');

export const titleSetsAtom = atom<string[]>([]);

export const questionsListAtom = atom<QuestionsList[]>([]);
