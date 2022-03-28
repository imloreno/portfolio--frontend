import { useState } from "react";
import Buttons from "components/common/buttons";
import Filter from "components/common/filter";
import SocialMediaIcons from "components/common/icons/SocialMediaIcons";
import sendEmail from "scripts/sendEmail";
import {
  isEmail,
  isValid,
  replaceCharacters,
} from "scripts/characterValidation";
import { useSelector } from "react-redux";
import langPick from "consts/lang";

const statusMessages: any = {
  error: "Rellenar correctamente todos los campos",
  success: "Mensaje enviado",
};

const Contact = (props: { isLoading?: boolean }) => {
  //Redux
  const store = useSelector((store: any) => store.language.lang);
  const {
    contact: { form },
  } = langPick(store || "en");

  //State variables
  const [name, setName] = useState({ isValid: true, value: "" });
  const [email, setEmail] = useState({ isValid: true, value: "" });
  const [message, setMessage] = useState({ isValid: true, value: "" });
  const [status, setStatus] = useState({ isActive: false, type: "error" });

  //OnChange funcitons
  const handleName = (e: any): void =>
    setName({ isValid: isValid(e.target.value), value: e.target.value });
  const handleEmail = (e: any): void =>
    setEmail({ isValid: isEmail(e.target.value), value: e.target.value });
  const handleMessage = (e: any): void =>
    setMessage({ isValid: true, value: replaceCharacters(e.target.value) });
  const resetForm = (): void => {
    setName({ isValid: true, value: "" });
    setEmail({ isValid: true, value: "" });
    setMessage({ isValid: true, value: "" });
  };

  //OnSubmit function
  const handleSubmit = (e: any): void => {
    setStatus({ isActive: false, type: "error" });
    e.preventDefault();

    if (
      name.value !== "" &&
      name.value !== "" &&
      name.value !== "" &&
      name.isValid &&
      email.isValid &&
      message.isValid
    ) {
      sendEmail({
        name: name.value,
        email: email.value,
        message: message.value,
      });
      setStatus({ isActive: true, type: "success" });
      setTimeout(() => setStatus({ isActive: false, type: "success" }), 2000);
      resetForm();
    } else {
      setStatus({ isActive: true, type: "error" });
    }
  };

  return (
    <section
      className={`contact scroll open-animation ${
        props.isLoading && "change-animation"
      }`}
    >
      <form action="#" className="contact__form" onSubmit={handleSubmit}>
        <ul className="contact__buttons">
          <a
            href="https://www.facebook.com/Sanc7us"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <SocialMediaIcons type="facebook" className="contact__icon" />
            </li>
          </a>
          <a
            href="https://www.github.com/imloreno"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <SocialMediaIcons type="gitHub" className="contact__icon" />
            </li>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=59169141407&text=Hola"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <SocialMediaIcons type="whatsapp" className="contact__icon" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/soylorenzo/"
            rel="noreferrer"
            target="_blank"
          >
            <li>
              <SocialMediaIcons type="linkedin" className="contact__icon" />
            </li>
          </a>
        </ul>
        <input
          type="text"
          placeholder={form.name}
          onChange={handleName}
          value={name.value}
          className={`${!name.isValid && "input-error"}`}
          required
        />
        <input
          type="email"
          placeholder={form.email}
          onChange={handleEmail}
          value={email.value}
          className={`${!email.isValid && "input-error"}`}
          required
        />
        <textarea
          name=""
          id=""
          placeholder={form.message}
          onChange={handleMessage}
          value={message.value}
          className={`${!message.isValid && "input-error"}`}
          required
        ></textarea>
        <Buttons text={form.button} type="contrast" />
        {status.isActive && (
          <span
            className={`status-send ${status.type === "error" && "error-msg"}`}
          >
            {statusMessages[status.type] ? statusMessages[status.type] : ""}
          </span>
        )}
        <Filter />
      </form>
    </section>
  );
};

export default Contact;
