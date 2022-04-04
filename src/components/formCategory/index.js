import UserCard from "./userCard";
import style from "./style.module.css";
export default function FormCategory() {
  const Seeker = {
    url: "/imgs/seeker.png",
    type: "Seeker",
    color: "#f4c479",
  };
  const Provider = {
    url: "/imgs/provider.png",
    type: "Provider",
    color: "#1fbdf2",
  };
  return (
    <div>
      <h1 className={style.formTitle}>Select Profile Category To Continue</h1>
      <div className={style.formCont}>
        <div className={style.container}>
          <div>
            <UserCard data={Seeker} />
          </div>
          <div>
            <UserCard data={Provider} />
          </div>
        </div>
      </div>
    </div>
  );
}
