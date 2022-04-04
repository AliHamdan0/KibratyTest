import React from "react";
import { Field, ErrorMessage } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import style from "../style.module.css";
import { TextField } from "@mui/material";
function Name(props) {
  const { name, label, type, ...rest } = props;

  return (
    <Field name={name} {...rest}>
      {({ field, form }) => (
        <>
          <div className={style.validateCont}>
            <label className={style.formLabel}>{label}</label>
            {form?.touched[name] && !form.errors[name] && (
              <div className={style.iconCont}>
                <CheckIcon className={style.Checkicon} />
              </div>
            )}
          </div>
          <TextField
            {...field}
            id={name}
            className={
              form?.errors[name] && form.touched[name]
                ? style.inputError
                : style.formInput
            }
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
export default Name;
