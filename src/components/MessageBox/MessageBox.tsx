import React from "react";

interface MessageBoxProps {
  name: string;
  text: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ name, text }) => {
  return (
    <li className="flex py-3">
      <div className="rounded-full bg-grey-2 w-10 h-10 p-3 flex items-center justify-center mr-4">
        {name.slice(0, 1)}
      </div>

      <div>
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-grey-2">{name}</h2>
          <p className="text-xs text-grey-2">Today at 12:43 PM</p>
        </div>

        <p className="text-grey-3">{text}</p>
      </div>
    </li>
  );
};

export default MessageBox;
