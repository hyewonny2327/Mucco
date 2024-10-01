import React from "react";
import styles from "../../style/header.module.scss";
const MyMenu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.menu__text}>내 정보 관리</div>
      <div className={styles.menu__text}>예약 내역</div>
      <div className={styles.menu__text}>포인트</div>
      <div className={styles.menu__text}>쿠폰</div>
    </section>
  );
};

export default MyMenu;
