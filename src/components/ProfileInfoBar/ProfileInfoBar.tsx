import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { userAtom } from "../../store";

const ProfileInfoBar = () => {
  const [user] = useAtom(userAtom);

  return (
    <div className="mt-auto bg-grey-1 -mx-8 py-4 px-8 flex font-semibold items-center">
      <div className="rounded-full bg-grey-2 w-10 h-10 flex items-center justify-center mr-4 overflow-hidden">
        <Image
          src={user ? (user.photoURL as string) : ""}
          width={40}
          height={40}
          alt="Profile"
        />
      </div>

      <h2 className="font-bold text-lg">{user?.displayName}</h2>
      <button className="ml-auto">
        <FaChevronUp />
      </button>
    </div>
  );
};

export default ProfileInfoBar;
