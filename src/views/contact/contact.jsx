import { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./contact.module.css";

const Contact = () => {
  const form = useRef();

  const onSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ep6xaiz", "template_ge5sa3a", form.current, {
        publicKey: "9m6VB9eZTPy1xpgLI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className={styles.contact_container}>
      <div className={styles.h1_container}>
        <h1>
          Contactame <span>!</span>
        </h1>
      </div>

      <div className={styles.main_container}>
        <form ref={form} className={styles.form_container}>
          <div className={styles.input_container}>
            <div className={styles.nameEmail_container}>
              <label>Nombre</label>
              <input
                placeholder="Francisco"
                type="text"
                name="from_name"
              ></input>
              <label>Email</label>
              <input
                placeholder="fran@example.com"
                type="email"
                name="user_email"
              ></input>
            </div>
            <div className={styles.message_container}>
              <label>Mensaje</label>
              <textarea
                maxLength="230"
                placeholder="Mensaje"
                type="text"
                name="user_email"
              ></textarea>
            </div>
          </div>
          <div className={styles.button_container}>
            <button type="submit" onClick={onSend}>
              Enviar
            </button>
          </div>
        </form>
        <div className={styles.extrainfo_container}>
          <h3>
            Tambien puedes encontrarme en <span>:</span>
          </h3>
          <div className={styles.media_container}>
            <a href="https://www.instagram.com/depeex/">
              <img
                className={styles.icon}
                src="https://res.cloudinary.com/ded9gllk0/image/upload/v1741048284/instagram_u0vkv6.png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/francisco-depetrini">
              <img
                className={styles.icon}
                src="https://res.cloudinary.com/ded9gllk0/image/upload/v1741048284/linkedin_zkbweu.png"
                alt=""
              />
            </a>
            <a href="https://github.com/FrannnDepetrini/FrannnDepetrini">
              <img
                className={styles.icon}
                src="https://res.cloudinary.com/ded9gllk0/image/upload/v1741048284/github-removebg-preview_mx2axr.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
