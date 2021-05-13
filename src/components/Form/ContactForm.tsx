import { useState, FormEvent, ChangeEvent } from "react";
import { Axios, db } from "../../firebase/firebaseConfig";
import { firestore } from "firebase";
import styles from "./ContactForm.module.scss";
import Spinner from "../Spinner";
import { Button } from "../Primitives/Button";
import { TextInput, TextArea } from "../Primitives/Inputs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const updateInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message)
      return setError("Please fill all the fields");
    setError("");
    setLoading(true);
    await sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setLoading(false);
    setSubmitted(true);
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

  if (submitted)
    return (
      <div className={styles.thankYouContainer}>
        <h1>Thank you for contacting me {`;)`}</h1>
        <h2>Will get back to you soon</h2>
      </div>
    );

  if (loading) return <Spinner />;

  return (
    <div className={styles.formContainer}>
      <h1>Have any queries?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput
          type='text'
          name='name'
          placeholder='Name'
          onChange={updateInput}
          value={formData.name || ""}
        />
        <TextInput
          type='email'
          name='email'
          placeholder='Email'
          onChange={updateInput}
          value={formData.email || ""}
        />
        <TextArea
          name='message'
          placeholder='Message'
          onChange={updateInput}
          value={formData.message || ""}
        />
        {error && <p>{error}</p>}
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
