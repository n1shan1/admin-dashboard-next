import React from "react";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="user image" fill />
        </div>
        <div className={styles.name}>Iphone</div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder="IPhone" />

          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder="123" />

          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder="123" />

          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder="Red" />

          <label htmlFor="">Size</label>
          <input type="number" name="size" id="" placeholder="12" />

          <label htmlFor="">Category</label>
          <select name="cat" id="cat">
            <option value="general">Choose a category...</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="home">Home</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"
          ></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
