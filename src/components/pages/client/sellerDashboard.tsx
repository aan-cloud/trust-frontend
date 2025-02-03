'use client'

import { SubmitProductCard } from "@/components/ui/submitProductCard"
import Cookies from "js-cookie";
import { getSellerDashBoard } from "@/requests/seller";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/context/authContext";
import { z } from "zod";
import { allProductInDashboard } from "@/schema/product";

type ProductSchema = z.infer<typeof allProductInDashboard> | undefined

export const SellerDashboard = () => {
    const [products, setProducts] = useState<ProductSchema>([]);
    const { userId } = useAuthContext();
    const accesToken = Cookies.get("accessToken");

    useEffect(() => {
        async function fetch() {
            const submittedProduct = await getSellerDashBoard(userId as string, accesToken as string);

            if (products) {
                setProducts(submittedProduct)
            }
        }

        if (userId) {
            fetch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])
    
    return (
        <section className="sm:px-24 px-4 py-5">
            <h1 className="font-sans text-2xl font-bold mb-5">Submitted Product</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {
                products ?
                products.map((product) => (
                    <SubmitProductCard product={product} key={product.id}/>
                )) : 
                <div>
                    <small>You have no submitted product!</small>
                </div>
            }                
            </div>
        </section>
    )
}