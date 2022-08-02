import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle, auth } from "../utils/googleAuth";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import LoadingPage from "../components/LazyLoad/LoadingPage";
import Layout from "../components/Layout/Layout";

const LoginPage: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleSignIn = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <main className="h-screen w-screen bg-main-1 flex items-center justify-center">
      <Head>
        <title>Login | Classic Chat App</title>
      </Head>

      <Layout>
        <section className="bg-grey-1 rounded-xl w-[500px] p-6 shadow mx-4 flex flex-col items-center">
          <h1 className="text-center font-semibold text-2xl text-white mb-5">
            Classic Chat App
          </h1>

          <h2 className="text-center font-semibold text-xl text-white mb-5">
            Sign In
          </h2>

          <Button
            onClick={handleSignIn}
            className="bg-white w-full flex justify-center items-center py-4 space-x-3 text-lg"
          >
            <FcGoogle size={25} />
            <p>Sign in with Google</p>
          </Button>
        </section>
      </Layout>
    </main>
  );
};

export default LoginPage;
