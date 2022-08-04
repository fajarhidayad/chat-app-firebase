import { atom } from "jotai";
import type { User } from "firebase/auth";

export const userAtom = atom<User | null>(null);
export const channelIdAtom = atom<string>("");
export const modalAtom = atom<boolean>(false);
