export const listaDeCarro = [
    {
        id: 1,
        nome: "Nissan Skyline GT-R R34",
        autor: "Craig Lieberman",
        anoDeFabrica: 1998,
        marca: "Nissan",
        link: "https://th.bing.com/th/id/OIP.CIWHjand_JCcY5OlHjLEnAHaEo?rs=1&pid=ImgDetMain"
    },
    {
        id: 2,
        nome: "Nissan Skyline GT-R R35",
        autor: "Craig Lieberman",
        anoDeFabrica: 2007,
        marca: "Nissan",
        link: "https://th.bing.com/th/id/OIP.K1R-2ebwj6YDgTYEkrqa1wHaE8?rs=1&pid=ImgDetMain"
    },
    {
        id: 3,
        nome: "Porsche 911 turbo s",
        autor: "Ferdinand Porshe",
        anoDeFabrica: 1997,
        marca: "Porshe",
        link: "https://th.bing.com/th/id/R.500d3c652085cb4524ad492e32a30a85?rik=W%2bNUWYHgzmvRog&pid=ImgRaw&r=0"
    },
    {
        id: 4,
        nome: "Lamborghini Huracan",
        autor: "Ferrucio Lamborghini",
        anoDeFabrica: 2014,
        marca: "Lamborghini",
        link: "https://th.bing.com/th/id/OIP.GhIZmSFgogkw2Ssce-dwGgHaEK?rs=1&pid=ImgDetMain"
    }

]

export async function GET() {
    return NextResponse.json(listaDeCarro);
}