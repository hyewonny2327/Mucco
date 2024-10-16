import React from "react";
import styles from "../../style/header.module.scss";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const MyMenu = () => {
  const loginUserMenu = [
    { id: 1, title: "내 정보 관리", url: "/user-page/info" },
    { id: 2, title: "예약내역", url: "/user-page/reservation" },
    { id: 3, title: "포인트", url: "/user-page/membership" },
    { id: 4, title: "쿠폰", url: "/user-page/membership" },
    { id: 5, title: "로그아웃", url: "/", logout: true },
  ];
  const logoutUserMenu = [
    { id: 1, title: "로그인", url: "/login", logout: false },
  ];
  const { status } = useSession();
  const router = useRouter();
  function handleMenuClick(isLogout: boolean | undefined, url: string) {
    isLogout ? signOut() : null;
    console.log(url);
    router.replace(url);
  }
  return (
    <section className={styles.menu}>
      {status === "authenticated"
        ? loginUserMenu.map((item) => (
            <div
              className={styles.menu__text}
              key={item.id}
              onClick={() => handleMenuClick(item.logout, item.url)}
            >
              {item.title}
            </div>
          ))
        : logoutUserMenu.map((item) => (
            <div
              className={styles.menu__text}
              key={item.id}
              onClick={() => handleMenuClick(item.logout, item.url)}
            >
              {item.title}
            </div>
          ))}
    </section>
  );
};

export default MyMenu;
