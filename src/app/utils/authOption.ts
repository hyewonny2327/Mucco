import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt" as const,
    maxAge: 60 * 60 * 24,
    updateAge: 60 * 60 * 2,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async signIn({ user }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email as string },
      });
      //최초 로그인 시 join 페이지로 이동
      if (!existingUser) {
        return "/join";
      }
      // 전화번호가 없을 경우 join페이지로 이동
      if (existingUser && existingUser.phone === null) {
        return "/join";
      }
      return true; // 정상적으로 로그인
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub || session.user?.id,
      },
    }),
    jwt: async ({ user, token }) => {
      if (user && user.id) {
        token.sub = user.id;
      }
      return token;
    },
  },
};
