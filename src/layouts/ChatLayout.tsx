import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MessageBox from "../components/MessageBox";
import TextInput from "../components/TextInput";

import {
  collection,
  getDocs,
  FieldValue,
  addDoc,
  doc,
  onSnapshot,
  Timestamp,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAtom } from "jotai";
import { channelIdAtom, userAtom } from "../store";

interface Message {
  id?: string;
  userId: string;
  name: string;
  text: string;
  createdAt: FieldValue;
}

const ChatLayout = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [channelId] = useAtom(channelIdAtom);
  const [user] = useAtom(userAtom);

  const sendMessage = async () => {
    if (!message) return;
    if (channelId && user) {
      await addDoc(collection(db, "channels", channelId, "messages"), {
        text: message,
        name: user.displayName,
        userId: user.uid,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setMessage("");
    }
  };

  useEffect(() => {
    if (!channelId) return;

    const q = query(
      collection(db, "channels", channelId, "messages"),
      orderBy("createdAt", "desc"),
      limit(8)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const newMessage: Message[] = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          newMessage.push(change.doc.data() as Message);
        }
      });
      if (newMessage.length > 1) {
        setMessages(newMessage);
      } else {
        setMessages((prevMessage) => [...newMessage, ...prevMessage]);
      }
    });

    return () => {
      unsub();
    };
  }, [channelId]);

  return (
    <Layout variant="FADE_OUT" delay={0.5} className="flex-1 text-white">
      <section className="flex flex-col h-screen pb-6">
        <header className="shadow-md py-6 px-3 md:px-6 lg:px-16 h-[88px] flex items-center">
          <h1 className="font-semibold text-xl">Welcome</h1>
        </header>

        <ul className="flex-1 flex flex-col-reverse px-3 md:px-6 lg:px-16 overflow-y-scroll scrollbar">
          {messages.map((item) => (
            <MessageBox
              key={`${item.createdAt}`}
              name={item.name}
              text={item.text}
            />
          ))}
        </ul>

        <div className="mt-auto bg-main-2 px-3 md:px-6 lg:px-16">
          <TextInput
            value={message}
            setValue={(input) => setMessage(input)}
            onSubmit={sendMessage}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ChatLayout;
