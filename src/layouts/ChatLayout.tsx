import React, { useState } from "react";
import Layout from "../components/Layout";
import MessageBox from "../components/MessageBox";
import TextInput from "../components/TextInput";

const ChatLayout = () => {
  const [message, setMessage] = useState("");

  return (
    <Layout delay={0.5} classNames="flex-1 text-white">
      <section className="flex flex-col h-screen pb-6">
        <header className="shadow-md py-6 px-3 md:px-6 lg:px-16 h-[88px] flex items-center">
          <h1 className="font-semibold text-xl">Welcome</h1>
        </header>

        <ul className="flex-1 flex flex-col-reverse px-3 md:px-6 lg:px-16 overflow-y-scroll scrollbar">
          <MessageBox />
        </ul>

        <div className="mt-auto bg-main-2 px-3 md:px-6 lg:px-16">
          <TextInput value={message} setValue={(input) => setMessage(input)} />
        </div>
      </section>
    </Layout>
  );
};

export default ChatLayout;
