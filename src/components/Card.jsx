import classes from "./Card.module.css";
import Descrption from "./Descrption";
import ErrorComponent from "./ErrorComponent";
import ImageComponent from "./ImageComponent";
export default function Card({ count }) {
  return (
    <div className={classes.card}>
      <ImageComponent />
      <Descrption count={count || 3} />
      <ErrorComponent />
    </div>
  );
}
