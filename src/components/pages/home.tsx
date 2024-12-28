import Image from "next/image"
import { data } from "../../../data"
import { dummySchema } from "@/schema/data"
import { z } from "zod"

export const HomePage = () => {
    return (
        <>
            <section className="flex justify-between px-24 py-5">
            <div className="flex flex-col gap-6">
                <h1 className="pt-10 font-sans font-black text-6xl">MAKE YOUR CAR BEAUTIFUL AND MORE HEALTHY</h1>
                <p className="font-poppins">Look for the items you want, complete, reliable and original products that are trusted by more than 100 users.</p>
                <button className="px-4 py-2 text-white w-fit border bg-primary rounded-lg">Shop now</button>
                <ul className="mt-4 flex justify-start gap-6">
                    <li className="pr-7 font-poppins">
                        <h3 className="text-2xl font-semibold">200+</h3>
                        <small>Customer</small>
                    </li>
                    <li className="px-7 border-x-2 font-poppins">
                        <h3 className="text-2xl font-semibold">10+</h3>
                        <small>Partner</small>
                    </li>
                    <li className="pl-7 font-poppins">
                        <h3 className="text-2xl font-semibold">100%</h3>
                        <small>Original</small>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center w-full" id="illustration">
                <Image 
                    src="https://ucarecdn.com/a6a7b57f-f479-4f15-9c41-5fd1050674d7/trusthomeimageremovebgpreview.png"
                    alt="Ilustration automotive engineer"
                    width={550}
                    height={550}
                />
            </div>
        </section>
        <section className="px-24 py-4 flex text-white justify-between bg-black" id="partner">
            <div className="flex items-center gap-3">
                <Image 
                src={"https://ucarecdn.com/80997a9b-8b5f-4f4f-b4f8-bf7a30e9ffe9/perodua.webp"}
                alt="Perodua"
                width={50}
                height={50}
                />
                <h1 className="text-2xl font-sans font-bold">Perodua</h1>
            </div>
            <div className="flex items-center gap-3">
                <Image 
                src={"https://ucarecdn.com/667207de-b722-4d1c-9096-f3a324cde916/protonsparepartssupplierinMalaysia.webp"}
                alt="Toyota"
                width={50}
                height={50}
                />
                <h1 className="text-2xl font-sans font-bold">Toyota</h1>
            </div>
            <div className="flex items-center gap-3">
                
                <Image 
                src={"https://ucarecdn.com/a27ffd9a-76a7-4363-83db-cc70d91d6da2/HondasparepartssupplierinMalaysia.webp"}
                alt="Honda"
                width={50}
                height={50}
                />
                <h1 className="text-2xl font-sans font-bold">Honda</h1>
            </div>
            <div className="flex items-center gap-3">
                <Image 
                src={"https://ucarecdn.com/d978a410-f006-4652-a07d-4b113493acef/mitsubishisparepartssupplierinMalaysia.webp"}
                alt="Mitsubitsi"
                width={50}
                height={50}
            />
                <h1 className="text-2xl font-sans font-bold">Mistsubitsi</h1>
            </div>
            <div className="flex items-center gap-3">
                <Image 
                src={"https://ucarecdn.com/d382d922-cbab-4276-b342-3eb2fffcc0dd/toyota.webp"}
                alt="Toyota"
                width={50}
                height={50}
                />
                <h1 className="text-2xl font-sans font-bold">Toyota</h1>
            </div>
            
        </section>
        <section className="px-24 py-12 flex flex-col gap-10 bg-white" id="new">
            <h1 className="text-4xl font-black font-inte text-center">New Arrival</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4" id="cart">
            {
                data.map((product: z.infer<typeof dummySchema>) => (
                    <Cart key={product.id} product={product} />
                ))
            }
            </div>
        </section>
        </>
    )
}

const Cart = ({ product }: {product: z.infer<typeof dummySchema>}) => {
    return (
        <div className="flex flex-col gap-2">
            <Image 
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-xl"
            />
            <h2 className="pl-1 font-sans text-sm font-bold">{product.name}</h2>
            <small className="pl-1 flex">
                {
                    Array.from({ length: Math.floor(product.rate)}, (_, index) => index++).map((i) => (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" key={i} className="size-3 stroke-primary fill-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    ))
                }
            </small>
            <h1 className="pl-1 text-base font-bold font-sans">{`RP ${product.price}`}</h1>
        </div>
    )
}