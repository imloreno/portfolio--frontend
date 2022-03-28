import { MAIN_URL } from "consts/variables";

type props = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = async (props: props) => {
  const body = new FormData();
  body.append("name", props.name);
  body.append("email", props.email);
  body.append("message", props.message);
  const URL = MAIN_URL + "mail";
  const data = { method: "POST", body };

  const request = await fetch(URL, data);
  const response = await request.text();
  console.log(body);

  return response;
};

export default sendEmail;
