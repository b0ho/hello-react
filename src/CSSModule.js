import stylesA from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`${stylesA.wrapper} ${stylesA.inverted}`}>
      style test <span className="something"> CSS Module!</span>
    </div>
  );
};

export default CSSModule;
