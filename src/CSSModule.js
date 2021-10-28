import stylesA from "./CSSModule.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(stylesA);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      style test <span className="something"> CSS Module!</span>
    </div>
  );
};

export default CSSModule;
