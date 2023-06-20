import { useState } from "react";
import styles from "./StoreCurrentUser.module.css";
const StoreCurrentUser = () => {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const addUserToLocalStorage = () => {
    localStorage.setItem("username", username);
    if (localStorage.getItem("username")) {
      window.location.reload();
    }
  };
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        className={styles.input}
        value={username}
        onChange={handleUsernameChange}
        type="text"
        placeholder="Username"
      />
      <button className={styles.button} onClick={addUserToLocalStorage}>
        Submit
      </button>
    </div>
  );
};
export default StoreCurrentUser;
