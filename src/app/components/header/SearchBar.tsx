import React from "react";
import styles from "../../style/header.module.scss";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <div className={styles.searchBar__textArea}>
        <div className={styles.searchBar__textArea__subtitle}>여행날짜</div>
        <div className={styles.searchBar__textArea__title}>여행지 검색</div>
      </div>
      <div className={styles.searchBar__textArea}>
        <div className={styles.searchBar__verticalLine}></div>
        <div className={styles.searchBar__textArea__subtitle}>여행지</div>
        <div className={styles.searchBar__textArea__title}>날짜 추가</div>
      </div>
      <div className={styles.searchBar__textArea}>
        <div className={styles.searchBar__verticalLine}></div>
        <div className={styles.searchBar__textArea__subtitle}>인원</div>
        <div className={styles.searchBar__textArea__title}>인원 추가</div>
      </div>
      <IoIosSearch size={24} color="#333333" />
    </section>
  );
};

export default SearchBar;
