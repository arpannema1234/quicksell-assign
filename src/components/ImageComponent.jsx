import classes from "./ImageComponent.module.css";
import ImageSingle from "./ImageSingle";
const images = [
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICd.jpg",
    error: false,
    ready: true,
  },
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91j5-eCEW5j1nOY.jpg",
    error: false,
    ready: true,
  },
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91iKhzu-4c2hPFN.jpg",
    error: false,
    ready: true,
  },
  {
    url: "",
    error: true,
    ready: false,
  },
];
export default function ImageComponent() {
  return (
    <div className={classes.img}>
      {images.map((img, index) => (
        <ImageSingle
          index={index}
          url={img.url}
          ready={img.ready}
          errors={img.error}
        />
      ))}
    </div>
  );
}
