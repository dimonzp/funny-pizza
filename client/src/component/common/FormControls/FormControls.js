import React from "react";
import styles from "./FormControls.module.sass";

const FormControl = ({ input, child, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? styles.error : null}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restprops} />
    </FormControl>
  );
};
