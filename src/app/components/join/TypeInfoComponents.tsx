import React from "react";
import styles from "../../style/userAuth.module.scss";
import Button from "@/app/components/common/Button";
import { TermsType } from "@/app/(pages)/join/page";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../common/Input";
import { RegisterOptions } from "react-hook-form";

type TypeInfoComponentsProps = {
  setIsTermsPage: (value: boolean) => void;
};
export type userJoinInputsType = {
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
  verifiedNumber: number;
};
const TypeInfoComponents: React.FC<TypeInfoComponentsProps> = ({
  setIsTermsPage,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userJoinInputsType>();
  const onSubmit: SubmitHandler<userJoinInputsType> = (data) =>
    console.log(data);
  return (
    <section className={styles.userAuth__container}>
      <div className={styles.userAuth__title}>
        회원가입을 위해서
        <br />
        아래의 정보가 필요해요.
      </div>
      <form
        className={styles.userAuth__buttonContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          labelText="이름"
          id="name"
          name="name"
          type="text"
          placeholder="이름을 입력하세요"
          register={register}
          registerOptions={{
            required: "이름은 필수 입력 항목입니다.",
            maxLength: 20,
          }}
          isError={errors.name}
        />
        <section className={styles.userAuth__phone__container}>
          <Input
            labelText="휴대폰 번호"
            id="phone"
            name="phone"
            type="phone"
            placeholder="01012345678"
            register={register}
            registerOptions={{
              required: "전화번호는 필수 입력 항목입니다.",
              pattern: {
                value: /^01[0-9]{8,9}$/, // 전화번호 형식
                message: "유효한 전화번호를 입력해주세요. (예: 01012345678)",
              },
            }}
            isError={errors.phone}
            isButton={true}
            buttonText="인증번호전송"
          />
          <div>
            <Input
              id="verifiedNumber"
              name="verifiedNumber"
              type="text"
              placeholder="인증번호를 입력하세요"
              register={register}
              registerOptions={{
                required: "인증번호를 입력하세요",
                maxLength: {
                  value: 6,
                  message: "유효한 인증번호를 입력하세요",
                },
              }}
              isError={errors.verifiedNumber}
              isTimer={true}
            />
          </div>
        </section>
        <Input
          labelText="비밀번호"
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={register}
          registerOptions={{
            required: "비밀번호는 필수 입력 항목입니다.",
            maxLength: {
              value: 20,
              message: "20자리 이하의 비밀번호를 입력해주세요",
            },
            minLength: {
              value: 4,
              message: "4자리 이상의 비밀번호를 입력해주세요",
            },
          }}
          isError={errors.password}
        />
        <Input
          labelText="비밀번호 확인"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          register={register}
          registerOptions={{
            required: "비밀번호 확인은 필수 입력 항목입니다.",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.", // 입력된 비밀번호와 비교
          }}
          isError={errors.confirmPassword}
        />

        <input type="submit" id="submit" className={styles.userAuth__submit} />
        <label htmlFor="submit">
          <Button
            color="black"
            size="large"
            onClick={() => setIsTermsPage(false)}
          >
            다음
          </Button>
        </label>
      </form>
    </section>
  );
};

export default TypeInfoComponents;
