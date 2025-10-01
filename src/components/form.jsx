import { useState } from "react";
import { validateForm } from "../util/form-validation";
import Button from "../components/button";
import style from "../styles/contact.module.css";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault(); // stop submit if errors
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <form
      action="https://formspree.io/f/mrbykeqe"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className={style.error}>{errors.name}</span>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className={style.error}>{errors.email}</span>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={values.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && (
          <span className={style.error}>{errors.message}</span>
        )}
      </div>

      <Button type="submit">Send Message</Button>

      {submitted && (
        <p className={style.success}>Message sent successfully!</p>
      )}
    </form>
  );
};

export default Form;
