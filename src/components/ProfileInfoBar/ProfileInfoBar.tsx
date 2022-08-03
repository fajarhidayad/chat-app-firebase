import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { userAtom } from "../../store";
import ProfileInfoPopUp from "../ProfileInfoPopUp";

const ProfileInfoBar = () => {
  const [user] = useAtom(userAtom);
  const [menu, setMenu] = useState(false);

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
      <div className="ml-auto relative">
        <button onClick={() => setMenu(!menu)}>
          <FaChevronUp />
        </button>
        <AnimatePresence>{menu && <ProfileInfoPopUp />}</AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileInfoBar;
