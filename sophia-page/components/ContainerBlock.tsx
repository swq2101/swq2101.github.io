import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Sophia Qureshi</title>
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
      </main>
    </div>
  );
}
