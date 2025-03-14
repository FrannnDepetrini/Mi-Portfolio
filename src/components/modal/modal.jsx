import styles from "./modal.module.css";
import classNames from "classnames";

const Modal = ({ modalVisible, type, message }) => {
  return (
    <div
      className={classNames(styles.modal_container, {
        [styles.error]: type === "error",
        [styles.success]: type === "success",
        [styles.visible]: modalVisible,
      })}
    >
      {!message ? (
        <div className={styles.loader}></div>
      ) : (
        <h3 className={styles.msg}>{message}</h3>
      )}
    </div>
  );
};

export default Modal;
