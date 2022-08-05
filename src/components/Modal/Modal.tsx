import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { modalAtom } from "../../store";
import Layout from "../Layout";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Modal = () => {
  const [modal, setModal] = useAtom(modalAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  const submitNewChannel = async () => {
    if (!title || !description) {
      setError("All field is required");
      return;
    }

    await addDoc(collection(db, "channels"), {
      name: title,
      description,
    });
    setModal(false);
  };

  return (
    <AnimatePresence>
      {modal && (
        <Layout
          variant="FADE_OUT"
          className="absolute bg-black/50 flex justify-center items-center w-screen h-screen"
        >
          <div className="rounded-lg w-[500px] p-5 bg-main-2 text-white">
            <h1 className="text-xl font-semibold mb-5">Add new channel</h1>
            <input
              type="text"
              placeholder="Channel name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg bg-grey-1 w-full p-3 mb-5 focus:outline-grey-3"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Channel description"
              className="rounded-lg bg-grey-1 w-full p-3 focus:outline-grey-3"
            />
            {error && <p className="text-red-500 mb-5">{error}</p>}
            <div className="flex justify-end space-x-4 mt-3">
              <button
                onClick={() => setModal(false)}
                className="bg-grey-1 px-5 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={submitNewChannel}
                className="bg-grey-2 px-5 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default Modal;
