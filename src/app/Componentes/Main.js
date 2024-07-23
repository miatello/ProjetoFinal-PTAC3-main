"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../css/main.module.css";
import Loading from "./Loading";



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

    if( listCarros[0] == null) {
        return <Loading />;
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.carList}>
                    {listCarros.map((item) => (
                        <div key={item.id} className={styles.cardCar}>
                            <h3>{item.nome}</h3>
                            <Image
                                src={item.link}
                                width={300}
                                height={400}
                            />
                            <p>{item.autor}</p>
                            <p>{item.marca}</p>
                            <p>{item.anoDeFabrica}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}