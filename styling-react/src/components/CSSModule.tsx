import styles from "../styles/CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      <p>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </p>
    </div>
  );
};

export default CSSModule;
