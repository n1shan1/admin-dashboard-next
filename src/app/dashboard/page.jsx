import React from "react";
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Page;
