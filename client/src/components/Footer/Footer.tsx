import styles from "./Footer.module.css";
import logoPP from "./../../assets/logoPP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img src={logoPP} alt="Logo" className={styles.logo} />
            </div>
          </div>
          <div className={styles.row}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="/" className={styles.link}>
                  <FontAwesomeIcon
                    className={styles.socialIcons}
                    icon={faDiscord}
                  />
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/" className={styles.link}>
                  <FontAwesomeIcon
                    className={styles.socialIcons}
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/" className={styles.link}>
                  <FontAwesomeIcon
                    className={styles.socialIcons}
                    icon={faInstagram}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        All rights reserved. 2023 Pixel Peak. Images by{" "}
        <a
          style={{
            textDecoration: "none",
            listStyleType: "none",
            color: "gray",
          }}
          href="https://www.freepik.com/"
        >
          Freepik
        </a>
      </p>
    </footer>
  );
};

export default Footer;
