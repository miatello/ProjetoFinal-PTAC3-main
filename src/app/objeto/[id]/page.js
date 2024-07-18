import Image from "next/image";
import style from "../page.module.css"

export default function Objeto(params){
    const response = await fetch ('http://localhost;3000/api/' + params.id)
    const data = await response.json()
    return(
        <div>
            <p>{data.titulo}</p>
        </div>
    )
} 