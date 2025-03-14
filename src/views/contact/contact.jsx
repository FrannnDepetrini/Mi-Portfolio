import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import styles from "./contact.module.css";
import UseTranslation from "../../customHooks/useTranslation/useTranslation";
import Modal from "../../components/modal/modal";
import { useValidateInput } from "../../customHooks/useValidateInput/useValidateInput";

const Contact = ({ onLoadImages }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [resultEmailjs, setResultEmailjs] = useState("");
  const [messageEmailjs, setMessageEmailjs] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [validateName, errorsName] = useValidateInput("Name");
  const [validateEmail, errorsEmail] = useValidateInput("Email", "email");
  const [validateMsg, errorsMsg] = useValidateInput("Message");

  const translate = UseTranslation();
  const form = useRef();

  const onSend = (e) => {
    e.preventDefault();

    if (errorsName.msg != "") {
      alert(errorsName.msg);
    } else if (errorsEmail.msg != "") {
      alert(errorsEmail.msg);
    } else if (errorsMsg.msg != "") {
      alert(errorsMsg.msg);
    } else {
      emailjs
        .sendForm("service_ep6xaiz", "template_ge5sa3a", form.current, {
          publicKey: "9m6VB9eZTPy1xpgLI",
        })
        .then(
          () => {
            setResultEmailjs("success");
            setMessageEmailjs("Enviado con exito");
          },
          (error) => {
            setResultEmailjs("error");
            setMessageEmailjs("Error: " + error.msg);
          }
        );
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2500);
    }
  };

  const mediaImgs = [
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1741048284/instagram_u0vkv6.png",
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1741048284/linkedin_zkbweu.png",
    "https://res.cloudinary.com/ded9gllk0/image/upload/v1741048284/github-removebg-preview_mx2axr.png",
  ];

  const amountImgs = mediaImgs.length;

  useEffect(() => {
    console.log("hola 3");
    mediaImgs.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log("hola 4");
        setLoadedImages((prev) => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (amountImgs === loadedImages) {
      console.log("hola 2");
      onLoadImages();
    }
  }, [loadedImages]);

  return (
    <>
      <div className={styles.contact_container}>
        <div className={styles.h1_container}>
          <h1>
            {translate("contactMe")} <span>!</span>
          </h1>
        </div>

        <div className={styles.main_container}>
          <form ref={form} className={styles.form_container}>
            <div className={styles.input_container}>
              <div className={styles.nameEmail_container}>
                <label>{translate("name")}</label>
                <input
                  onChange={(e) => validateName(e.target.value)}
                  placeholder="Francisco"
                  type="text"
                  name="from_name"
                ></input>
                <label>Email</label>
                <input
                  onChange={(e) => validateEmail(e.target.value)}
                  placeholder="fran@example.com"
                  type="email"
                  name="user_email"
                ></input>
              </div>
              <div className={styles.message_container}>
                <label>{translate("message")}</label>
                <textarea
                  onChange={(e) => validateMsg(e.target.value)}
                  maxLength="230"
                  placeholder="Mensaje"
                  type="text"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className={styles.button_container}>
              <button type="submit" onClick={onSend}>
                {translate("send")}
              </button>
            </div>
          </form>
          <div className={styles.extrainfo_container}>
            <h3>
              {translate("alsoFind")} <span>:</span>
            </h3>
            <div className={styles.media_container}>
              <a href="https://www.instagram.com/depeex/">
                <img className={styles.icon} src={mediaImgs[0]} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/francisco-depetrini">
                <img className={styles.icon} src={mediaImgs[1]} alt="" />
              </a>
              <a href="https://github.com/FrannnDepetrini/FrannnDepetrini">
                <img className={styles.icon} src={mediaImgs[2]} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        modalVisible={modalVisible}
        type={resultEmailjs}
        message={messageEmailjs}
      ></Modal>
    </>
  );
};

export default Contact;
