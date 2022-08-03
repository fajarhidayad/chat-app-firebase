import React from "react";
import Layout from "../Layout";
import { MdLogout } from "react-icons/md";
import { ImCog } from "react-icons/im";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/googleAuth";

const ProfileInfoPopUp = () => {
  return (
    <Layout
      variant="FADE_UP"
      className="absolute right-0 bottom-10 w-40 rounded-lg bg-slate-50 shadow text-main-2 p-3"
    >
      <button className="p-3 flex items-center space-x-3 text-main-2 hover:bg-slate-200 w-full rounded-lg">
        <ImCog /> <span>Profile</span>
      </button>
      <div className="border-b border-b-main-2 my-1" />
      <button
        onClick={() => signOut(auth)}
        className="p-3 flex items-center space-x-3 text-red-500 hover:bg-slate-200 w-full rounded-lg"
      >
        <MdLogout /> <span>Sign Out</span>
      </button>
    </Layout>
  );
};

export default ProfileInfoPopUp;
