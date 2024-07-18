import { NextResponse } from "next/server";

export const listaDeCarros = [
    {
        id: 1,
        titulo: "718 Cayman",
        marca: "Porsche",
        cor: "Preto",
        imagem: "https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sL;twebp/porsche-thumbwhite.webp"
    },
    {
        id: 2,
        titulo: "718 Boxster",
        marca: "Porsche",
        cor: "Cinza",
        imagem: "https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-modelimage-sideshot/thumbwhite/93fa2a92-fee1-11ed-8103-005056bbdc38;sL;twebp/porsche-thumbwhite.webp"
    },
    {
        id: 3,
        titulo: "718 Cayman Style Edition",
        marca: "Porsche",
        cor: "Cinza Azulado",
        imagem: "https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-se-modelimage-sideshot/thumbwhite/7bdc3629-4ea4-11ed-80f7-005056bbdc38;sL;twebp/porsche-thumbwhite.webp"
    },
    {
        id: 4,
        titulo: "718 Boxster Style Edition",
        marca: "Porsche",
        cor: "Rosa Magenta",
        imagem: "https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-se-modelimage-sideshot/thumbwhite/a43e6499-4ea4-11ed-80f7-005056bbdc38;sL;twebp/porsche-thumbwhite.webp"
    }
];

export async function GET(){
    return NextResponse.json(listaDeCarros)
}
