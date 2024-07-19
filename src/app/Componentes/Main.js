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
                <div className={styles.carList}>
                    {listCarros.map((item) => (
                        <div key={item.id} className={styles.cardPet}>
                            <h3>{item.titulo}</h3>
                            <Image
                                src={item.imagem}
                                width={300}
                                height={400}
                            />
                            <p>{item.marca}</p>
                            <p>{item.cor}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}