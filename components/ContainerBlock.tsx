import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

interface ContainerProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode,
  title: "string";
}


export default function ContainerBlock({ children, ...props}: ContainerProps) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Sophia Qureshi</title>
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
}
