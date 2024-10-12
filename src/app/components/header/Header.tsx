"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import defaultProfile from "../../assets/svg/defaultProfile.svg";
import { HiOutlineMenu } from "react-icons/hi";

import styles from "../../style/header.module.scss";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import SearchResultBar from "./SearchResultBar";
import Link from "next/link";
import MyMenu from "./MyMenu";
type Pathname = "/" | "/login" | "/join" | "/user-page" | "/search" | "/room";
const Header = () => {
  const pathname = usePathname() as Pathname;
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  return (
    <header className={styles.header}>
      <section className={styles.header__sharedSection}>
        <Link href={"/"}>
          <Image
            className={styles.header__logo}
            src={logo}
            alt="logo"
            width={95.76}
            height={24}
          ></Image>
        </Link>
        {(pathname === "/search" || pathname === "/room") && (
          <SearchResultBar />
        )}
        <section
          className={styles.header__profile}
          onMouseEnter={() => setIsMenuClosed(false)}
          onMouseLeave={() => setIsMenuClosed(true)}
        >
          <Image
            src={defaultProfile}
            alt="profile image"
            width={34}
            height={34}
          ></Image>
          {/* gray4 #646F7C */}
          <HiOutlineMenu color="#646F7C" size="24" />
        </section>
        {!isMenuClosed && (
          <div
            className={styles.header__profile__menu}
            onMouseEnter={() => setIsMenuClosed(false)}
            onMouseLeave={() => setIsMenuClosed(true)}
          >
            <MyMenu />
          </div>
        )}
      </section>
      {/* 메인페이지 search bar */}
      {pathname === "/" && <SearchBar />}
      <div className={styles.header__horizontalLine}></div>
    </header>
  );
};

export default Header;
