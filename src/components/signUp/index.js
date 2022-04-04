import FormikContianer from "./formik/formikContainer";
import style from "./style.module.css";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
export default function SignUp() {
  const { state } = useLocation();
  return (
    <div className={style.container}>
      <Box
        className={style.formHeader}
        sx={{
          backgroundColor:
            state == "Provider" ? "primary.main" : "secondary.main",
        }}
      >
        <HowToRegIcon
          className={style.registerIon}
          sx={{
            color: state == "Provider" ? "#e8e8e8" : "#795548",
          }}
        />
        <div className={style.formHeadCont}>
          <h2 style={{ margin: "0px", color: "#555555", lineHeight: "1.6" }}>
            REGISTER FORM
          </h2>
          <p style={{ margin: "0px", color: "#6f6f6f" }}>
            PLEASE FILL IN THE FORM BELOW
          </p>
        </div>
      </Box>
      <FormikContianer type={state} />
    </div>
  );
}
