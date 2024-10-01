import React from "react";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import defaultProfile from "../../assets/svg/defaultProfile.svg";
import { IoIosMenu } from "react-icons/io";

import styles from "../../style/global.module.scss";
import SearchBar from "../main/SearchBar";
const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__sharedSection}>
        <Image
          className={styles.header__logo}
          src={logo}
          alt="logo"
          width={95.76}
          height={24}
        ></Image>
        <section className={styles.header__profile}>
          <Image
            src={defaultProfile}
            alt="profile image"
            width={34}
            height={34}
          ></Image>
          {/* gray4 #646F7C */}
          <IoIosMenu color="#646F7C" size="24" />
        </section>
      </section>
      {/* 메인페이지 search bar */}
      <SearchBar />
      <div className={styles.header__horizontalLine}></div>
    </header>
  );
};

export default Header;
