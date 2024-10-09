import React, { ReactNode } from "react";
import styles from "../../style/commonComponents.module.scss";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { userJoinInputsType } from "../join/TypeInfoComponents";
import Button from "./Button";
import cx from "classnames";

type InputProps = {
  type: string;
  id: string;
  name: keyof userJoinInputsType;
  minlength?: number;
  maxlength?: number;
  size?: number;
  labelText?: string;
  placeholder?: string;
  isIcon?: boolean;
  isTimer?: boolean;
  register: UseFormRegister<userJoinInputsType>;
  registerOptions?: RegisterOptions<
    userJoinInputsType,
    keyof userJoinInputsType
  >;
  isError?: ReactNode;
  isButton?: boolean;
  buttonText?: string;
};
const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  minlength,
  maxlength,
  size,
  labelText,
  placeholder,
  isIcon,
  isTimer,
  register,
  registerOptions,
  isError,
  isButton,
  buttonText,
}) => {
  return (
    <section className={styles.input}>
      <label htmlFor={id} className={styles.input__label}>
        {labelText}
      </label>
      <div className={styles.input__container}>
        <div className={cx(styles.input__container__inputField)}>
          <input
            className={styles.input__container__inputField__text}
            placeholder={placeholder}
            type={type}
            id={id}
            minLength={minlength}
            maxLength={maxlength}
            size={size}
            {...register(name, { ...registerOptions })}
          />
          {isIcon && (
            <div className={styles.input__container__inputField__icon}>
              icon
            </div>
          )}
          {isTimer && <div>timer</div>}
        </div>
        {isButton && (
          <div className={styles.input__buttonContainer}>
            <Button color="disabled" size="small">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
      <div className={styles.input__error}>{isError}</div>
    </section>
  );
};

export default Input;
