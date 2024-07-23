import React from "react";
import Image from "next/image";
import styles from "../css/footer.module.css";


export default function footer(){
    return (
      <footer className={styles.footer}>
      <p>&copy; 2024 LuxoDrive. Todos os direitos reservados a Mias e Degras.</p>
      <div>
      <p>Siga nossas Redes Sociais!!</p>
                <Image
                        src={"/instagram.svg"}
                        width={20}
                        height={20}
                        className={styles.iconeredessociais}
                        />
                <Image
                        src={"/facebook.svg"}
                        width={20}
                        height={20}
                        className={styles.iconeredessociais}
                        />
                <Image
                        src={"/twitter.svg"}
                        width={20}
                        height={20}
                        className={styles.iconeredessociais}
                        />
      </div>
  </footer>
      );
    }