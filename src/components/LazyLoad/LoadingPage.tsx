import React from "react";
import Layout from "../Layout/Layout";
import { LoadingSpinner } from "./LoadingSpinner";

export const LoadingPage: React.FC = () => {
  return (
    <main className="h-screen w-screen bg-main-1 text-white flex justify-center items-center">
      <Layout variant="FADE_OUT">
        <LoadingSpinner size={50} />
      </Layout>
    </main>
  );
};
