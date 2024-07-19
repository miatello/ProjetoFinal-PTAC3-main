import React from "react";
import Link from "next/link";
import styles from "../css/footer.module.css";


export default function footer(){
    return (
        <footer className={styles.footer}>
          <p>© 2024 Your Company. All rights reserved.</p>
        </footer>
      );
    }