"use client";
import client from "@/app/db/index";
import axios from "axios";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import Appbar from "./components/Appbar";

import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Appbar />
    </>
  );
}
