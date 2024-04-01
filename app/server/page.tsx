import { getServerSession } from "next-auth";
import { nextAuth } from "../lib/auth";

async function getUser() {
  const session = await getServerSession(nextAuth);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return <div>{JSON.stringify(session)}</div>;
}
