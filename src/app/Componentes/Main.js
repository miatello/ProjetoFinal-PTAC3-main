"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles.css";
import Link from 'next/link';


export default function Main() {
    const [listCarros, setListCarros] = useState([]);

    useEffect(() => {
        const getCarros = async () => {
            const response = await fetch('/api');
            const data = await response.json();
            setListCarros(data);
        }
        getCarros();
    }, []);

    return (
        <>

            <main className={styles.main}>
                <div className={styles.petList}>
                    {listCarros.map((item) => (
                        <div key={item.id} className={styles.cardPet}>
                            <h3>{item.nome}</h3>
                            <Image
                                src={item.link}
                                width={100}
                                height={100}
                            />
                            <p>{item.nome}</p>
                            <p>{item.autor}</p>
                            <p>{item.anoDeFabrica}</p>
                            <p>{item.marca}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}