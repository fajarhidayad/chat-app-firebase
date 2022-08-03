import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { SearchInput } from "../components/TextInput";
import ChannelThumbnail from "../components/ChannelThumbnail";
import ProfileInfoBar from "../components/ProfileInfoBar";
import Layout from "../components/Layout";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { channelIdAtom } from "../store";
import { useAtom } from "jotai";

interface Channel {
  id: string;
  name: string;
  description: string;
}

const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [channels, setChannels] = useState<Channel[]>([]);
  const [channelId, setChannelId] = useAtom(channelIdAtom);

  useEffect(() => {
    const getChannels = async () => {
      const newChannels: Channel[] = [];
      const snapshot = await getDocs(collection(db, "channels"));
      snapshot.forEach((doc) => {
        newChannels.push({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
        });
      });

      setChannels(newChannels);
      setChannelId(newChannels[0].id);
    };

    getChannels();
  }, [setChannelId]);

  return (
    <motion.aside
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden bg-main-1 w-[350px] text-white lg:flex flex-col"
    >
      <Layout
        variant="FADE_OUT"
        delay={0.5}
        className="py-6 px-8 shadow-md flex justify-between items-center"
      >
        <h1 className="font-semibold text-xl">Channelss</h1>
        <button className="bg-grey-1 p-3 rounded-lg">
          <FaPlus />
        </button>
      </Layout>

      <Layout
        variant="FADE_OUT"
        delay={0.5}
        className="px-8 mt-5 flex-1 flex flex-col"
      >
        <SearchInput
          value={searchValue}
          setValue={(input) => setSearchValue(input)}
        />

        <ul className="my-5 -mx-6 scrollbar">
          {channels.map((item) => (
            <ChannelThumbnail
              key={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </ul>

        <ProfileInfoBar />
      </Layout>
    </motion.aside>
  );
};

export default SideBar;
