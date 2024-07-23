"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../css/main.module.css";
import Loading from "./Loading";
import Erro from "./Erro";



export default function Main() {
    const [listCarros, setListCarros] = useState([]);
    const [isErro, setisErro] = useState(false);

    useEffect(() => {
        const getCarros = async () => {
            try{
            const response = await fetch('/api1');
            const data = await response.json();
            setListCarros(data);
            } catch{
                setisErro(true)
            }
        }
        getCarros();
    }, []);

    if(isErro == true) {
        return <Erro/>;
      }

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