import React from "react";

interface ChannelThumbnailProps {
  name: string;
  description: string;
}

const ChannelThumbnail: React.FC<ChannelThumbnailProps> = ({
  name,
  description,
}) => {
  return (
    <li className="flex space-x-4 uppercase font-semibold items-center hover:bg-grey-1 rounded py-2 px-6 my-2">
      <div className="rounded-full bg-grey-2 w-10 h-10 flex items-center justify-center">
        {name.slice(0, 1)}
      </div>
      <h2>{name}</h2>
    </li>
  );
};

export default ChannelThumbnail;
