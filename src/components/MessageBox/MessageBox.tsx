import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

interface MessageBoxProps {
  name: string;
  text: string;
  date: Date;
}

const MessageBox: React.FC<MessageBoxProps> = ({ name, text, date }) => {
  const timestamp = formatDistanceToNow(date);

  const getInitialName = (name: string) => {
    const fullName = name.split(" ");
    if (fullName.length > 1) {
      return fullName[0].slice(0, 1) + fullName[1].slice(0, 1);
    } else {
      return fullName[0].slice(0, 1);
    }
  };

  const initialName = getInitialName(name);

  return (
    <li className="flex py-3">
      <div className="rounded-full bg-grey-2 w-10 h-10 p-3 flex items-center justify-center mr-4">
        {initialName}
      </div>

      <div>
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-grey-2">{name}</h2>
          <p className="text-xs text-grey-2">{timestamp + " ago"}</p>
        </div>

        <p className="text-grey-3">{text}</p>
      </div>
    </li>
  );
};

export default MessageBox;
