import Image from 'next/image';
import style from '../page.module.css';

export default function Loading (){
    return (
        <div>
            <Image width={100} height={100} src={"carregando.svg"} />
            <p>Carregando</p>
        </div>
    )
}