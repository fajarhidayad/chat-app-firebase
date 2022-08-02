import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../utils/googleAuth";
import { LoadingPage } from "../components/LazyLoad";
import SideBar from "../layouts/SideBar";
import ChatLayout from "../layouts/ChatLayout";

const Home: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (!userAuth) {
        router.push("/login");
      } else {
        setUser(userAuth);
      }
    });
  }, [router]);

  if (!user) return <LoadingPage />;

  return (
    <div className="flex h-screen w-screen bg-main-2">
      <SideBar />
      <ChatLayout />
    </div>
  );
};

export default Home;
