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
  verified: number;
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
          registerOptions={{ required: true, maxLength: 20 }}
          isError={errors.name && <span>오류</span>}
        />
        <section className={styles.userAuth__phone__container}>
          <Input
            labelText="휴대폰 번호"
            id="phone"
            name="phone"
            type="phone"
            placeholder="01012345678"
            register={register}
            registerOptions={{ required: true }}
            isError={errors.name && <span>오류</span>}
            isButton={true}
            buttonText="인증번호전송"
          />
          <div>
            <Input
              id="verified"
              name="verified"
              type="text"
              placeholder="인증번호를 입력하세요"
              register={register}
              registerOptions={{ required: true }}
              isError={errors.verified && <span>오류</span>}
            />
          </div>
        </section>

        <input type="submit" />
      </form>
      <Button color="black" size="large" onClick={() => setIsTermsPage(false)}>
        다음
      </Button>
    </section>
  );
};

export default TypeInfoComponents;
