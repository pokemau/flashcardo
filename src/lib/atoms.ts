import { atom } from "jotai";
import { QuestionsList } from "./types";


export const titleAtom = atom('');

export const questionsListAtom = atom<QuestionsList[]>([]);
