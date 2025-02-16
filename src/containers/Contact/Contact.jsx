import React, { useState } from "react";
import "../Services/Services.css";
import CustomBlocks from "../../components/CustomBlocks/CustomBlocks";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
