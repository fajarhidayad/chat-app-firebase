import React from "react";
import { MdSend } from "react-icons/md";

interface TextInputProps {
  value: string;
  setValue: (input: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, setValue }) => {
  return (
    <div className="bg-grey-1 text-white flex rounded-lg p-2 items-center justify-between pl-5">
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="focus:outline-none bg-transparent"
        placeholder="Type a message"
      />
      <button className="bg-grey-2 rounded p-2">
        <MdSend size={25} />
      </button>
    </div>
  );
};

export default TextInput;
