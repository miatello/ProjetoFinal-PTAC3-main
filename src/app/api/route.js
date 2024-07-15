import { NextResponse } from "next/server";

export const listaDeCarro = [
    {
        id: 1,
        nome: "Nissan Skyline GT-R R34",
        autor: "Craig Lieberman",
        anoDeFabrica: 1998,
        marca: "Nissan"
    },
    {
        id: 2,
        nome: "Nissan Skyline GT-R R35",
        autor: "Craig Lieberman",
        anoDeFabrica: 2007,
        marca: "Nissan"
    },
    {
        id: 3,
        nome: "Porsche 911 turbo s",
        autor: "Ferdinand Porshe",
        anoDeFabrica: 1997,
        marca: "Porshe"
    },
    {
        id: 4,
        nome: "Lamborghini Huracan",
        autor: "Ferrucio Lamborghini",
        anoDeFabrica: 2014,
        marca: "Lamborghini"
    }

]

export async function GET() {
    return NextResponse.json(listaDeCarro);
}