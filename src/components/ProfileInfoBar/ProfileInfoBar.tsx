import React from "react";
import { FaChevronUp } from "react-icons/fa";

const ProfileInfoBar = () => {
  return (
    <div className="mt-auto bg-grey-1 -mx-8 py-4 px-8 flex font-semibold items-center">
      <div className="rounded-full bg-grey-2 w-10 h-10 flex items-center justify-center mr-4">
        FH
      </div>

      <h2 className="font-bold text-lg">Fajar Hidayad</h2>
      <button className="ml-auto">
        <FaChevronUp />
      </button>
    </div>
  );
};

export default ProfileInfoBar;
