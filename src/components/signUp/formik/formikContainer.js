import style from "../style.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControll from "./formControl.js";
import { Button } from "@mui/material";
export default function FormikContianer({ type }) {
  console.log("type", type);
  const initialValues = {
    name: "",
    email: "",
    age: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("required !"),
    name: Yup.string().required("required !"),
  });
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className={style.formFieldsCont}>
            <FormControll
              controll="email"
              name="email"
              label="Email"
              type={type}
            />
            <FormControll
              controll="name"
              name="name"
              label="Name"
              type={type}
            />
            <FormControll controll="age" name="age" label="Age" type={type} />
            <div className={style.btnCont}>
              <Button
                className={
                  !(formik.isValid && formik.dirty) || formik.isSubmitting
                    ? `${style.disable} ${style.formRestButton}`
                    : style.formRestButton
                }
                type="submit"
                sx={{
                  backgroundColor:
                    type == "Provider" ? "primary.main" : "secondary.main",
                  color: "white",
                  border: "1px solid",
                  "&:hover": {
                    color:
                      type == "Provider" ? "primary.main" : "secondary.main",
                    backgroundColor: "trransparent",
                  },
                }}
              >
                Submit
              </Button>
              <Button
                type="reset"
                className={style.formButton}
                sx={{
                  color: type == "Provider" ? "primary.main" : "secondary.main",
                  backgroundColor: "transparent",
                  border: "1px solid",
                  "&:hover": {
                    backgroundColor:
                      type == "Provider" ? "primary.main" : "secondary.main",
                    color: "white",
                  },
                }}
              >
                Reset
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
