import globalStyle from "./style/global.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <main className={globalStyle.main}>
        <h1>안녕하세요</h1>
        <h2>여기서 묵고 가, Mucco.</h2>
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
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}
