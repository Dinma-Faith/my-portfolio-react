import { Link } from "react-router-dom";
import styles from "../styles/button.module.css";

const Button = ({ children, to, href, type = "button", onClick }) => {
  // Button for Internal route
  if (to) {
    return (
      <Link to={to} className={styles.btns}>
        {children}
      </Link>
    );
  }

  //Button for External link
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={styles.btns}>
        {children}
      </a>
    );
  }

  // Regular button for form submit or action
  return (
    <button type={type} onClick={onClick} className={styles.btns}>
      {children}
    </button>
  );
};

export default Button;
