import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
  let navigate = useNavigate();
  return (
    <div>
      <div style={{ position: "relative", zIndex: "-1" }}>
        <img src="/imgs/welcome.jpg" className={style.coverImg} />
        <div className={style.overLay}></div>
      </div>
      <div className={style.cont}>
        <h1 className={`${style.title} animate`}>
          Welcome To Our Creative World
        </h1>
        <p className={`${style.text} animate`}>
          Register New Account And Enjoy Our Features
        </p>
        <button
          className={`${style.heroButton} animate`}
          onClick={() => navigate(`/formCategory`)}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
