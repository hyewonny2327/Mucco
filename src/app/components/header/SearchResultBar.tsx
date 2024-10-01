import React from "react";
import styles from "../../style/header.module.scss";
import { IoIosSearch } from "react-icons/io";

const SearchResultBar = () => {
  return (
    <section className={styles.searchResultBar}>
      <div className={styles.searchBar__textArea}>
        <div className={styles.searchBar__textArea__title}>부산</div>
      </div>
      <div className={styles.searchBar__textArea}>
        <div className={styles.searchBar__verticalLine}></div>
        <div className={styles.searchBar__textArea__title}>
          2023.09.12 ~ 2023.09.20
        </div>
      </div>
      <div className={styles.searchBar__textArea}>
        <div className={styles.searchBar__verticalLine}></div>
        <div className={styles.searchBar__textArea__title}>3명</div>
      </div>
      <IoIosSearch size={24} color="#333333" />
    </section>
  );
};

export default SearchResultBar;
