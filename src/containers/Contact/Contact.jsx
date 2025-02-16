import React, { useState } from "react";
import "../Services/Services.css";
import CustomBlocks from "../../components/CustomBlocks/CustomBlocks";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Contact.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const showError = (msg) => {
    MySwal.fire({
      title: `Failure`,
      text: `${msg}`,
      icon: "error",
      confirmButtonText: "Okay",
    });
  };

  const showSuccess = (msg) => {
    MySwal.fire({
      title: `Success`,
      text: `${msg}`,
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, message: message, email: email }),
    });
    const data = await response.json();

    console.log(data);
    if (data.response === "success") {
      showSuccess(data.msg);
    } else {
      showError(data.msg);
    }
  };
  return (
    <>
      <div name="Contact" className="contact-section">
        <CustomBlocks
          name={"CONTACT WITH ME"}
          title={"Connect with me"}
          contentsList={["Chat with me and let's make your project live"]}
        />

        <form
          method="post"
          onSubmit={handleSubmit}
          style={{
            width: "70%",
          }}
        >
          <CustomInput
            name={"name"}
            type={"text"}
            value={name}
            setValue={setName}
            placeholder={"Your Name"}
          />
          <CustomInput
            name={"email"}
            type={"email"}
            value={email}
            setValue={setEmail}
            placeholder={"Your Email"}
          />
          <CustomInput
            isTextArea={true}
            name={"message"}
            value={message}
            setValue={setMessage}
            placeholder={"Your Message"}
          />
          <CustomButton text={"Send me message"} type={"primary"} />
        </form>
      </div>
    </>
  );
};

export default Contact;
