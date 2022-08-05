import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MessageBox from "../components/MessageBox";
import TextInput from "../components/TextInput";

import {
  collection,
  addDoc,
  onSnapshot,
  Timestamp,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAtom } from "jotai";
import { activeChannelAtom, messageAtom, userAtom, Message } from "../store";

const ChatLayout = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useAtom(messageAtom);
  const [activeChannel] = useAtom(activeChannelAtom);
  const [user] = useAtom(userAtom);

  const sendMessage = async () => {
    if (!message) return;
    if (activeChannel && user) {
      await addDoc(collection(db, "channels", activeChannel.id, "messages"), {
        text: message,
        name: user.displayName,
        userId: user.uid,
        createdAt: Timestamp.now(),
      });
      setMessage("");
    }
  };

  useEffect(() => {
    if (!activeChannel) return;

    const q = query(
      collection(db, "channels", activeChannel.id, "messages"),
      orderBy("createdAt", "desc"),
      limit(8)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const newMessage: Message[] = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const date = change.doc.data().createdAt.toDate();
          newMessage.push({ ...change.doc.data(), createdAt: date } as Message);
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
  }, [activeChannel, setMessages]);

  return (
    <Layout variant="FADE_OUT" delay={0.5} className="flex-1 text-white">
      <section className="flex flex-col h-screen pb-6">
        <header className="shadow-md py-6 px-3 md:px-6 lg:px-16 h-[88px] flex items-center">
          <h1 className="font-semibold text-xl capitalize">
            {activeChannel?.name}
          </h1>
        </header>

        <ul className="flex-1 flex flex-col-reverse px-3 md:px-6 lg:px-16 overflow-y-scroll scrollbar">
          {messages.map((item) => (
            <MessageBox
              key={`${item.createdAt}`}
              name={item.name}
              text={item.text}
              date={item.createdAt}
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
