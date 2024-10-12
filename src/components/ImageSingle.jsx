import { useEffect, useState } from "react";
import errimg from "../assets/error.jpg";
import classes from "./ImageSingle.module.css";
export default function ImageSingle({ url, ready, errors, index }) {
  const [error, setError] = useState(errors);
  const [loading, setLoading] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (ready && attempt < 3) {
      setLoading(false);
      setError(false);
    } else if (attempt < 3) {
      setTimeout(() => {
        setAttempt((prev) => prev + 1);
      }, 5000);
    }
  }, [attempt]);

  if (!error && ready && attempt < 3) {
    return <img src={url} id={"img" + index} />;
  } else if (attempt < 3) {
    setAttempt((prev) => prev + 1);
  }
  return (
    <div className={classes["error-div"]} id={"img" + index}>
      <img src={errimg} alt="" />
    </div>
  );
}
