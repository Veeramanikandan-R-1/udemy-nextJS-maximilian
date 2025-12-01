"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  return (
    <>
      <div>About</div>
      <button onClick={() => router.back()}>Go Back</button>
    </>
  );
};

export default AboutPage;
