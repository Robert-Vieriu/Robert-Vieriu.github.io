import styles from "./Section.module.css";

// import video from "../../assets/video.mp4";
import { motion } from "framer-motion";
// import { toast } from "react-hot-toast/headless";
// import { useEffect, useRef } from "react";
import lobby from "../../assets/minigames/lobby-min.png";

interface SectionProps {
  ip: string;
  clickOnToast: () => void;
}

const Section = ({ ip, clickOnToast }: SectionProps) => {
  const handleClick = () => {
    window.navigator.clipboard.writeText(ip);
    clickOnToast();
  };

  // var device = "";
  // if (
  //   navigator.userAgent.indexOf("Android") != -1 ||
  //   navigator.userAgent.indexOf("like Mac") != -1
  // ) {
  //   device = "phone";
  // } else if (
  //   navigator.userAgent.indexOf("Win") != -1 ||
  //   navigator.userAgent.indexOf("Mac") != -1 ||
  //   navigator.userAgent.indexOf("Linux") != -1
  // ) {
  //   device = "computer";
  // }

  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        {/* {device === "computer" ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            className={styles.video}
          ></video>
        ) : ( */}
        <img className={styles.lobbyImg} src={lobby} alt="" />
        {/* )} */}
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.title}
          initial={{ y: 1000 }}
          animate={{
            x: 0,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
        >
          Welcome to Pixelpeak.
        </motion.div>
        <motion.div
          className={styles.text}
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
        >
          Pixelpeak is a Minecraft server that is focused on providing a fun
          experience for all players. We have a variety of gamemodes and
          minigames on our server so you can be entertained all day long.
        </motion.div>
        <motion.div
          className={styles.buttons}
          initial={{ x: 1000, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
        >
          <a className={styles.button} onClick={handleClick}>
            <span className={styles.buttonText}>IP: {ip}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
