import { useAtom } from "jotai";
import React from "react";
import { activeChannelAtom, Channel, messageAtom } from "../../store";

const ChannelThumbnail: React.FC<Channel> = ({ id, name, description }) => {
  const [activeChannel, setActiveChannel] = useAtom(activeChannelAtom);
  const [, setMessages] = useAtom(messageAtom);

  const onClickActiveChannel = () => {
    if (activeChannel && activeChannel.id === id) return;
    setActiveChannel({
      id,
      name,
      description,
    });
    setMessages([]);
  };

  return (
    <li
      onClick={onClickActiveChannel}
      className="flex space-x-4 uppercase font-semibold items-center hover:bg-grey-1 rounded py-2 px-6 my-2 cursor-pointer"
    >
      <div className="rounded-full bg-grey-2 w-10 h-10 flex items-center justify-center">
        {name.slice(0, 1)}
      </div>
      <h2>{name}</h2>
    </li>
  );
};

export default ChannelThumbnail;
