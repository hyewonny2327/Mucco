import React, { Dispatch, SetStateAction } from "react";
import styles from "../../style/commonComponents.module.scss";
import { HiOutlineCheck } from "react-icons/hi";
type checkboxType = {
  text: string;
  isCheck: boolean;
  setIsCheck: () => void;
};
const Checkbox = ({ text, isCheck, setIsCheck }: checkboxType) => {
  return (
    <section className={styles.checkbox}>
      <div className={styles.checkbox__box} onClick={setIsCheck}>
        {isCheck && <HiOutlineCheck />}
      </div>
      <div className={styles.checkbox__text}>{text}</div>
    </section>
  );
};

export default Checkbox;
