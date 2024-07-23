import Image from "next/image"
import styles from "../../css/pageobj.module.css"
export default async function Objeto({params}){
    const response = await fetch ('http://localhost:3000/api/' + params.id)
    const data = await response.json()
    return(
        <div className={styles.card}>
            <h3>{data.nome}</h3>
                            <Image
                                src={data.link}
                                width={300}
                                height={400}
                            />
                            <p>{data.autor}</p>
                            <p>{data.marca}</p>
                            <p>{data.anoDeFabrica}</p>
        </div>
    )
} 