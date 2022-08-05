import { useAtom } from "jotai";
import React from "react";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { channelDetailAtom, modalAtom } from "../../store";
import Layout from "../Layout";

export const SideBarHeader = () => {
  const [, setModal] = useAtom(modalAtom);
  const [channelDetail, setChannelDetail] = useAtom(channelDetailAtom);

  return (
    <Layout variant="FADE_OUT" delay={0.5} className="py-6 px-8 shadow-md">
      {channelDetail ? (
        <nav className="flex items-center space-x-5">
          <button onClick={() => setChannelDetail(false)} className="py-3">
            <FaChevronLeft />
          </button>
          <h1 className="font-semibold text-xl">All Channels</h1>
        </nav>
      ) : (
        <nav className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Channels</h1>
          <button
            onClick={() => setModal(true)}
            className="bg-grey-1 p-3 rounded-lg"
          >
            <FaPlus />
          </button>
        </nav>
      )}
    </Layout>
  );
};
