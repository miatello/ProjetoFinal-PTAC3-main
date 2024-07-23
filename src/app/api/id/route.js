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
    },

    {
        id: 5,
        nome: "Bugatti Bolide",
        autor: "Saggittarius A",
        anoDeFabrica: 2021,
        marca: "Bugatti",
        link: "https://cdn.motor1.com/images/mgl/YA3zrl/s1/bugatti-bolide-track-testing.webp"
    },
    {
        id: 6,
        nome: "ferrari sf90",
        autor: "montadora italiana Ferrari",
        anoDeFabrica: 2019,
        marca: "Ferrari",
        link: "https://cdn.motor1.com/images/mgl/xqq24z/s1/novitec-ferrari-sf90-stradale-2022.webp"
    },
    {
        id: 7,
        nome: "bmw 320i",
        autor: "fábrica do BMW Group",
        anoDeFabrica: 2014,
        marca: "BMW",
        link: "https://cdn.motor1.com/images/mgl/KPK4R/s3/bmw-320i-m-sport-2021-teste-br.jpg"
    },
    {
        id: 8,
        nome: "Chevrolet Corvette",
        autor: "General Motors",
        anoDeFabrica: 1953,
        marca: "Chevrolet",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JcLy-MqfpeS8Kgu4u80IvxzuZg23Z0BEJA&s"
    },
    {
        id: 9,
        nome: "McLaren p1",
        autor: " Ron Dennis",
        anoDeFabrica: 2010,
        marca: "McLaren ",
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paris_Motor_Show_2012_%288065253081%29.jpg/800px-Paris_Motor_Show_2012_%288065253081%29.jpg"
    },
    {
        id: 10,
        nome: "McLaren p1",
        autor: " Ron Dennis",
        anoDeFabrica: 2010,
        marca: "McLaren ",
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paris_Motor_Show_2012_%288065253081%29.jpg/800px-Paris_Motor_Show_2012_%288065253081%29.jpg"
    }

]

export async function GET() {
    return NextResponse.json(listaDeCarro);
}