import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="astronaut in the ocean"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard!
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn!!!</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi
            excepturi voluptate. Dignissimos aspernatur officiis earum sunt,
            voluptate iste? Modi.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="astronaut in the ocean"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>Stay Tuned</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn!!!</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi
            excepturi voluptate. Dignissimos aspernatur officiis earum sunt,
            voluptate iste? Modi.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
