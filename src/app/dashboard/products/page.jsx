import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="product image"
                  height={40}
                  width={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>A phone</td>
            <td>11234</td>
            <td>12,12,22</td>
            <td>12</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
