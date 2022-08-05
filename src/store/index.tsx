import { atom } from "jotai";
import type { User } from "firebase/auth";

export interface Channel {
  id: string;
  name: string;
  description: string;
}

export interface Message {
  id?: string;
  userId: string;
  name: string;
  text: string;
  createdAt: Date;
}

export const userAtom = atom<User | null>(null);
export const activeChannelAtom = atom<Channel | null>(null);
export const channelDetailAtom = atom<boolean>(false);
export const messageAtom = atom<Message[]>([]);
export const modalAtom = atom<boolean>(false);
