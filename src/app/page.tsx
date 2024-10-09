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
          <div className={globalStyle.caption2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.caption1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.label2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.label1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.body2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.body1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.headline2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.headline1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.heading2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.heading1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.title3}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.title2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.title1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.display2}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
          <div className={globalStyle.display1}>
            안녕하세요. 여기서 묵고 가, Mucco
          </div>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}
