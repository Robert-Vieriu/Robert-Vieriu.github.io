import styles from "./Navigation.module.css";
import logo from "../../assets/logoPP.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Navigation = (props: any) => {
  console.log(props.isHome);
  const navigate = useNavigate();
  const [navStyle, setNavStyle] = useState<any>(styles.nav);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setNavStyle(styles.nav);
    } else {
      setNavStyle(styles.navScrolled);
    }
    if (props.isHome === false) {
      setNavStyle(styles.nav);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navStyle}>
      <div
        className={navStyle !== styles.navScrolled ? styles.overlay : ""}
      ></div>
      <ul className={styles.list}>
        <motion.div
          className={styles.left}
          initial={{ x: -1000 }}
          animate={{
            x: 0,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          <li className={styles.listItem}>
            <a className={styles.listLinkHome} href="/">
              <img src={logo} alt="logo" className={styles.logo} />
              <span className={styles.boldText}>Pixelpeak.</span>me
            </a>
          </li>
          <p className={styles.players}>
            {props.playerOnline !== undefined
              ? `● ${props.playerOnline} Players Online`
              : ""}
          </p>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ x: 1000 }}
          animate={{
            x: 0,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          {/* TO BE ADDED LATER ON WHEN WE HAVE NEWS */}
          {/* <li className={styles.listItem}>
            <Link
              className="listLink"
              to={"news"}
              spy={true}
              smooth={true}
              offset={document.documentElement.clientHeight * -0.1}
              duration={500}
            >
              <a
                //@ts-ignore
                onClick={props.isHome ? null : () => navigate("/")}
                className={styles.listLink}
              >
                News
              </a>
            </Link>
          </li> */}
          <li className={styles.listItem}>
            <Link
              className="listLink"
              to="minigames"
              spy={true}
              smooth={true}
              offset={document.documentElement.clientHeight * -0.1}
              duration={500}
            >
              <a //@ts-ignore
                onClick={props.isHome ? null : () => navigate("/")}
                className={styles.listLink}
              >
                Minigames
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.listLink}
              onClick={() => {
                navigate("/store");
              }}
            >
              Store
            </a>
          </li>
          <li className={styles.listItem}>
            <a //@ts-ignore
              onClick={
                props.isHome
                  ? null
                  : () =>
                      window.location.replace(
                        `${import.meta.env.VITE_DISCORD_LINK}`
                      )
              }
              className={styles.listLink}
            >
              Support
            </a>
          </li>
        </motion.div>
        <div className={styles.rightMobile}>
          <Menu right>
            {/* <Link
              to={"news"}
              spy={true}
              smooth={true}
              offset={document.documentElement.clientHeight * -0.1}
              duration={500}
            >
              <a
                //@ts-ignore
                onClick={props.isHome ? null : () => navigate("/")}
                className={styles.listLink}
              >
                News
              </a>
            </Link> */}
            <Link
              to="minigames"
              spy={true}
              smooth={true}
              offset={document.documentElement.clientHeight * -0.1}
              duration={500}
            >
              <a //@ts-ignore
                onClick={props.isHome ? null : () => navigate("/")}
                className={styles.listLink}
              >
                Minigames
              </a>
            </Link>
            <a
              className={styles.listLink}
              onClick={() => {
                navigate("/store");
              }}
            >
              Store
            </a>
            <a //@ts-ignore
              onClick={
                props.isHome
                  ? null
                  : () =>
                      window.location.replace(
                        `${import.meta.env.VITE_DISCORD_LINK}`
                      )
              }
              className={styles.listLink}
            >
              Support
            </a>
          </Menu>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
