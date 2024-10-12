import classes from "./Error.module.css";
import err from "../assets/error.jpg";
export default function ErrorComponent() {
  return (
    <div className={classes.error}>
      <img src={err} />
    </div>
  );
}
