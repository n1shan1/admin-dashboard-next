import React from "react";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" id="" placeholder="Title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category...</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="home">Home</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
