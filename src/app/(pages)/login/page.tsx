import Button from "@/app/components/common/Button";
import CenteredContainer from "@/app/components/common/CenterContainer";
import React from "react";
import styles from "../../style/userAuth.module.scss";
import Image from "next/image";
import logoKakao from "../../assets/svg/logoKakao.svg";
import logoNaver from "../../assets/svg/logoNaver.svg";
const loginPage = () => {
  return (
    <CenteredContainer>
      <section className={styles.userAuth__container}>
        <div className={styles.userAuth__title}>
          쉽게 가입하고
          <br />
          간편하게 로그인하세요
        </div>
        <section className={styles.userAuth__buttonContainer}>
          <Button size="large" color="kakao">
            <div className={styles.userAuth__flexCenterRow}>
              <Image src={logoKakao} width={24} height={24} alt="카카오로고" />
              <div>카카오로 시작하기</div>
            </div>
          </Button>
          <Button size="large" color="outlined">
            <div className={styles.userAuth__flexCenterRow}>
              <Image src={logoNaver} width={24} height={24} alt="카카오로고" />
              <div>네이버로 시작하기</div>
            </div>
          </Button>
          <Button size="large" color="outlined">
            구글 계정으로 계속하기
          </Button>
          <Button size="large" color="outlined">
            이메일로 계속하기
          </Button>
        </section>
      </section>
    </CenteredContainer>
  );
};

export default loginPage;
