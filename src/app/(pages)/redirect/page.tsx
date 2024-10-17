"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import prisma from "@/app/lib/prisma";

const RedirectPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      if (status === "authenticated" && session.user.id) {
        const response = await fetch("/api/user");
        const userData = await response.json();

        // 사용자 정보가 없거나 전화번호가 없을 경우 join 페이지로 리디렉션
        if (response.status === 401 || !userData.phone) {
          router.replace("/join");
        } else {
          router.replace("/"); // 전화번호가 있을 경우 홈 페이지로 리디렉션
        }
      } else if (status === "unauthenticated") {
        router.replace("/login"); // 로그인하지 않은 경우 로그인 페이지로 리디렉션
      }
    };

    checkUser();
  }, [status, session, router]);

  return null; // 로딩 중에는 아무것도 렌더링하지 않음
};

export default RedirectPage;
