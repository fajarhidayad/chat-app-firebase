import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { useAtom } from "jotai";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/googleAuth";
import { LoadingPage } from "../components/LazyLoad";
import SideBar from "../layouts/SideBar";
import ChatLayout from "../layouts/ChatLayout";
import { userAtom } from "../store";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (!userAuth) {
        router.push("/login");
      } else {
        setUser(userAuth);
      }
    });
  }, [router, setUser]);

  if (!user) return <LoadingPage />;

  return (
    <div className="flex h-screen w-screen bg-main-2 relative">
      <Head>
        <title>Classic Chat App</title>
      </Head>
      <SideBar />
      <ChatLayout />
      <Modal />
    </div>
  );
};

export default Home;
