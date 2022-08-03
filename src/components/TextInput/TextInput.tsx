import React from "react";
import { MdSend } from "react-icons/md";

interface TextInputProps {
  value: string;
  setValue: (input: string) => void;
  onSubmit: () => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, setValue, onSubmit }) => {
  return (
    <div className="bg-grey-1 text-white flex rounded-lg p-2 items-stretch justify-between pl-5 space-x-2">
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="focus:outline-none bg-transparent flex-1"
        placeholder="Type a message"
      />
      <button onClick={onSubmit} className="bg-grey-2 rounded p-2">
        <MdSend size={25} />
      </button>
    </div>
  );
};

export default TextInput;
