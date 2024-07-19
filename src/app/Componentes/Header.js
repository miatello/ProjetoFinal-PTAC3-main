import React from "react";
import Link from "next/link";
import styles from "../css/header.module.css";


export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Home</h1>
        </header>
    )
}