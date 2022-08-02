import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { SearchInput } from "../components/TextInput";
import ChannelThumbnail from "../components/ChannelThumbnail";
import ProfileInfoBar from "../components/ProfileInfoBar";
import Layout from "../components/Layout";

const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <motion.aside
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden bg-main-1 w-[350px] text-white lg:flex flex-col"
    >
      <Layout
        delay={0.5}
        classNames="py-6 px-8 shadow-md flex justify-between items-center"
      >
        <h1 className="font-semibold text-xl">Channels</h1>
        <button className="bg-grey-1 p-3 rounded-lg">
          <FaPlus />
        </button>
      </Layout>

      <Layout delay={0.5} classNames="px-8 mt-5 flex-1 flex flex-col">
        <SearchInput
          value={searchValue}
          setValue={(input) => setSearchValue(input)}
        />

        <ul className="my-5 -mx-6 scrollbar">
          <ChannelThumbnail />
        </ul>

        <ProfileInfoBar />
      </Layout>
    </motion.aside>
  );
};

export default SideBar;
