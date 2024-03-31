import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/app/db/index";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        const user: any = await client.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user) {
          const newUser = await client.user.create({
            data: {
              username: credentials.username,
              password: credentials.password,
            },
          });
          return newUser;
        }

        return user;
        
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
