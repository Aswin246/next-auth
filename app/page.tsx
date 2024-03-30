import axios from "axios";
import Link from "next/link";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const user = await getUserDetails();
  return (
    <>
      Home Page
      <Link href="/dashboard">Dashboard</Link>
      <div>
        {user?.name}
        {user?.email}
      </div>
    </>
  );
}
