"use client";
import { useSession } from "next-auth/react";
import globalStyle from "./style/global.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <main className={globalStyle.main}>
        {session ? (
          <div>
            <h1>{session.user.name} 님 안녕하세요!!</h1>
            <h2>오늘도 뽜이팅!</h2>
            <Image
              src={"/images/myImage.jpg"}
              alt="이미지"
              width={500}
              height={400}
            />
          </div>
        ) : (
          <>
            <h1>안녕하세요</h1>
            <h2>여기서 묵고 가, Mucco.</h2>
            <h2>로그인 해보세용</h2>
            <section className={globalStyle.navbar}>
              <Link href={"/"}>home</Link>
              <Link href={"/login"}>login</Link>
              <Link href={"/join"}>join</Link>
              <Link href={"/user-page"}>user-page</Link>
              <Link href={"/search"}>searchResult</Link>
              <Link href={"/room"}>room</Link>
              <Link href={"/reservation/payment"}>reservation-payment</Link>
              <Link href={"/reservation/confirmation"}>
                reservation-confirmation
              </Link>
            </section>
          </>
        )}
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}
