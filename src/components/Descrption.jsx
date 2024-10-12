import classes from "./Descrption.module.css";
export default function Descrption({ count }) {
  return (
    <div className={classes.desc}>
      <h5>test_Design</h5>
      <p>{count} products</p>
    </div>
  );
}
