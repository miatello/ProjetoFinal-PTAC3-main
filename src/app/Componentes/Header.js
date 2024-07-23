import React from "react";
import Image from "next/image";
import styles from "../css/header.module.css";


export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                        src={"/currency-dollar.svg"}
                        width={20}
                        height={20}                        />
            <h1 className={styles.title}>LuxoDrive</h1>
            <div>
            <ul className={styles.menu}>
                <li>Home</li>
                <li>Sobre Nossa Loja</li>
                <li>Mais Vendidos</li>
                <li className={styles.centrodireito}>Entre em Contato e Adquira seu Carro de Luxo</li>
            </ul>
            </div>
        </header>
    )
}