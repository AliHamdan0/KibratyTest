import React from "react";
import { Field, ErrorMessage } from "formik";
import style from "../style.module.css";
import { TextField } from "@mui/material";
function Age(props) {
  const { name, label, type, ...rest } = props;

  return (
    <Field name={name} {...rest}>
      {({ field, form }) => (
        <>
          <label className={style.formLabel}>{label}</label>
          {console.log("erroes", form.errors)}
          {console.log("erroes", form.touched)}
          <TextField
            type="number"
            {...field}
            id={name}
            className={style.formInput}
            color={type == "Provider" ? "primary" : "secondary"}
          />
          <ErrorMessage
            name={name}
            className={style.errorStyle}
            component="div"
          />
        </>
      )}
    </Field>
  );
}
export default Age;
