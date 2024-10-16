import React from "react";
import styles from "../../style/userAuth.module.scss";
import Button from "@/app/components/common/Button";
import { HiOutlineCheck } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

import { TermsType } from "@/app/(pages)/join/page";
import Checkbox from "../common/Checkbox";

type TermsComponentsProps = {
  terms: TermsType;
  setIsTermsPage: (value: boolean) => void;
};

const TermsComponents: React.FC<TermsComponentsProps> = ({
  terms,
  setIsTermsPage,
}) => {
  function handleNextButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    // e.preventDefault();
    setIsTermsPage(false);
  }
  return (
    <section className={styles.userAuth__container}>
      <div className={styles.userAuth__title}>
        다시 돌아오신걸 환영해요!
        <br />
        약관동의가 필요해요.
      </div>
      <section className={styles.userAuth__buttonContainer}>
        <Button color="disabled" isDisabled={true} size="large">
          <div className={styles.userAuth__flexStartRow}>
            <HiOutlineCheck color="#000" size="16" />
            <div>약관전체동의</div>
          </div>
        </Button>
        {terms.map((term, index) => (
          <div key={index} className={styles.userAuth__buttonContainer__terms}>
            {/* 아코디언 버튼 컴포넌트로 교체 필요  */}
            <Checkbox text={term.text} />
            <HiOutlineChevronRight color="#646F7C" size="12" />
          </div>
        ))}
      </section>
      <Button color="black" size="large" onClick={handleNextButtonClick}>
        다음
      </Button>
    </section>
  );
};

export default TermsComponents;
