import Email from "./email.js";
import Name from "./name.js";
import Age from "./age.js";

function FormControll(props) {
  const { controll, ...rest } = props;
  switch (controll) {
    case "email":
      return <Email {...rest} />;
    case "name":
      return <Name {...rest} />;
    case "age":
      return <Age {...rest} />;
    default:
      return null;
  }
}

export default FormControll;
