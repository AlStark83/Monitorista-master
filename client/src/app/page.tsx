import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from 'next/navigation';
import { use } from "react";

export default function Home() {
  const { userId } = auth();
  if (userId){
    redirect('/dashboard')
  }
    return (
      <main className="">
        <h1 className="text-8xl">Coorporativo DN</h1>
      </main>
    );
}
