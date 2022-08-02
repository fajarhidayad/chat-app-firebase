import React from "react";

const MessageBox = () => {
  return (
    <li className="flex py-3">
      <div className="rounded-full bg-grey-2 w-10 h-10 p-3 flex items-center justify-center mr-4">
        FH
      </div>

      <div>
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-grey-2">Fajar Hidayad</h2>
          <p className="text-xs text-grey-2">Today at 12:43 PM</p>
        </div>

        <p className="text-grey-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          possimus animi nam perferendis consectetur in. Ratione numquam
          dolorem, beatae maiores id odit consequatur recusandae enim voluptate
          veritatis perferendis eos vitae.
        </p>
      </div>
    </li>
  );
};

export default MessageBox;
