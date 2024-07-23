import Image from 'next/image';
import styles from "../css/loading.module.css"

export default function Loading (){
    return (
        <div className={styles.loading}>
            <Image width={100} height={100} src={"carregando.svg"} />
            <p>Carregando</p>
        </div>
    )
}