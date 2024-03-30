import client from "@/app/db/index";
import axios from "axios";
import Link from "next/link";

async function getUserDetails() {
  const response = await client.user.findFirst();
  return response;
}

export default async function Home() {
  const user = await getUserDetails();
  return (
    <>
      Home Page
      <Link href="/dashboard">Dashboard</Link>
      <div>
        {user?.username}
        {user?.password}
      </div>
    </>
  );
}
