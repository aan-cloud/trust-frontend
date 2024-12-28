import { dummySchema } from "@/schema/data"
import { z } from "zod"


export const data:z.infer<typeof dummySchema>[]  = [
    {
        id: 1,
        name: "Toyota brake",
        imageUrl: "https://ucarecdn.com/a4e126cb-7f5d-4232-a43e-645cee7a2339/toyotabrake.webp",
        price: 200000,
        rate: 4.9
    },
    {
        id: 2,
        name: "Toyota brake",
        imageUrl: "https://ucarecdn.com/a4e126cb-7f5d-4232-a43e-645cee7a2339/toyotabrake.webp",
        price: 200000,
        rate: 4.9
    },
    {
        id: 3,
        name: "Toyota brake",
        imageUrl: "https://ucarecdn.com/a4e126cb-7f5d-4232-a43e-645cee7a2339/toyotabrake.webp",
        price: 200000,
        rate: 4.9
    },
    {
        id: 4,
        name: "Toyota brake",
        imageUrl: "https://ucarecdn.com/a4e126cb-7f5d-4232-a43e-645cee7a2339/toyotabrake.webp",
        price: 200000,
        rate: 4.9
    },
    {
        id: 5,
        name: "Toyota brake",
        imageUrl: "https://ucarecdn.com/a4e126cb-7f5d-4232-a43e-645cee7a2339/toyotabrake.webp",
        price: 200000,
        rate: 4.9
    },
]