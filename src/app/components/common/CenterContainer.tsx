import React from "react";
import styles from "../../style/commonComponents.module.scss"; // SCSS 파일 import

const CenteredContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.centeredContainer} ${className}`}>{children}</div>
  );
};

export default CenteredContainer;
