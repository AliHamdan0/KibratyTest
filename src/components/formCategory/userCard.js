import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
export default function UserCard({ data }) {
  let navigate = useNavigate();
  return (
    <div
      style={{ overflow: "hidden", padding: "10px" }}
      onClick={() => navigate("/signUp", { state: data?.type })}
    >
      <div
        className={style.clientCont}
        style={{ borderColor: `${data?.color}` }}
      >
        <div className={style.clientCardImgCont}>
          <img
            src={data?.url}
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={style.clientTextCont}>
          <h6 className={style.cardText} style={{ color: `${data?.color}` }}>
            {data.type}
          </h6>
        </div>
      </div>
    </div>
  );
}
