import { useAtom } from "jotai";
import React from "react";
import { modalAtom } from "../../store";
import Layout from "../Layout";

const Modal = () => {
  const [, setModal] = useAtom(modalAtom);

  return (
    <Layout
      variant="FADE_OUT"
      className="absolute bg-black/50 flex justify-center items-center w-screen h-screen"
    >
      <div className="rounded-lg w-[500px] p-5 bg-main-2 text-white">
        <h1 className="text-xl font-semibold mb-5">Add new channel</h1>
        <input
          type="text"
          placeholder="Channel name"
          className="rounded-lg bg-grey-1 w-full p-3 mb-5"
        />
        <textarea
          placeholder="Channel description"
          className="rounded-lg bg-grey-1 w-full p-3 mb-5"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setModal(false)}
            className="bg-grey-1 px-5 py-2 rounded-md"
          >
            Cancel
          </button>
          <button className="bg-grey-2 px-5 py-2 rounded-md">Save</button>
        </div>
      </div>
    </Layout>
  );
};

export default Modal;
