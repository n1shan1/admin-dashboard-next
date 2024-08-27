import React from "react";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="user image" fill />
        </div>
        <div className={styles.name}>John Doe</div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder="John Doe" />

          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="john@hmail.com" />

          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder="John Doe" />

          <label htmlFor="">Phone</label>
          <input type="phone" name="phone" placeholder="1234567890" />

          <label htmlFor="">Address</label>
          <textarea type="text" name="address" id="" placeholder="New York" />

          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
