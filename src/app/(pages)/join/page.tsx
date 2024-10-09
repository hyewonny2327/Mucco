"use client";
import CenteredContainer from "@/app/components/common/CenterContainer";
import TermsComponents from "@/app/components/join/TermsComponents";
import TypeInfoComponents from "@/app/components/join/TypeInfoComponents";
import React, { useState } from "react";

export type TermsType = { id: number; required: boolean; text: string }[];
const JoinPage = () => {
  //이것도 api로 불러오면 좋겠다 (관리자 메뉴에서 변경할 수 있으니)
  const terms: TermsType = [
    {
      id: 1,
      required: true,
      text: "(필수) 이용약관",
    },
    {
      id: 2,
      required: true,
      text: "(필수) 만 14세 이상 확인",
    },
    {
      id: 3,
      required: true,
      text: "(필수) 개인정보 수집 및 이용 동의",
    },
    {
      id: 4,
      required: false,
      text: "(선택) 개인정보 수집 및 이용 동의",
    },
    {
      id: 5,
      required: false,
      text: "(선택) 마케팅 알림 수신 동의",
    },
    {
      id: 6,
      required: false,
      text: "(선택) 위치기반 서비스 이용약관 동의",
    },
  ];
  const [isTermsPage, setIsTermsPage] = useState(true);
  return (
    <CenteredContainer>
      {isTermsPage && (
        <TermsComponents terms={terms} setIsTermsPage={setIsTermsPage} />
      )}
      {!isTermsPage && <TypeInfoComponents setIsTermsPage={setIsTermsPage} />}
    </CenteredContainer>
  );
};

export default JoinPage;
