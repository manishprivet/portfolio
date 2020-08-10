import React, { useState, FormEvent, ChangeEvent } from "react";
import { Axios, db } from "../../firebase/firebaseConfig";
import { firestore } from "firebase";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = async () => {
    try {
      await Axios.post(
        "https://us-central1-portfolio-3af99.cloudfunctions.net/submit",
        formData
      );
      await db.collection("emails").add({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date(),
      } as firestore.DocumentData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={updateInput}
          value={formData.name || ""}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={updateInput}
          value={formData.email || ""}
        />
        <textarea
          name='message'
          placeholder='Message'
          onChange={updateInput}
          value={formData.message || ""}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
