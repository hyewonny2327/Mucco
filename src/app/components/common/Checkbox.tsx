import React from "react";
import styles from "../../style/commonComponents.module.scss";
import { HiOutlineCheck } from "react-icons/hi";

const Checkbox = ({ text }: { text: string }) => {
  return (
    <section className={styles.checkbox}>
      <div className={styles.checkbox__box}>
        <HiOutlineCheck />
      </div>
      <div className={styles.checkbox__text}>{text}</div>
    </section>
  );
};

export default Checkbox;
