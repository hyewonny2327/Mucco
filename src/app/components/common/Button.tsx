import React from "react";
import styles from "../../style/commonComponents.module.scss";
import cx from "classnames";

type buttonSizeType = "large" | "regular" | "small";
type buttonColor = "kakao" | "outlined" | "black" | "disabled";
const Button = ({
  color,
  onClick,
  children,
  size,
  isDisabled,
}: {
  color: buttonColor;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  size: buttonSizeType;
  isDisabled?: boolean;
}) => {
  return (
    <button
      // classnames 라이브러리로 조건부렌더링
      className={cx(
        styles.button,
        styles[`button__color__${color}`],
        styles[`button__size__${size}`]
      )}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

/**
 * <ButtonOrLink
      {...restProps}
      aria-busy={loading}
      disabled={disabled}
      loading={loading}
      className={cx(
        styles.button,
        large && styles.button_large,
        small && styles.button_small,
        !large && !small && styles.button_regular,
        block && styles.button_block,
        (disabled || loading) && styles.button_disabled,
        (borderless || inverted) && styles.button_inverted,
        invalid && styles.button_invalid,
        borderless && styles.button_borderless,
        loading && styles.button_loading,
      )}
    >
 */
