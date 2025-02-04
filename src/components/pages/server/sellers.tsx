import { getAllSeler } from "@/requests/seller"
import { SellerCard } from "@/components/ui/sellerCard";


export const Sellers = async () => {

    const sellers = await getAllSeler();
    console.log(sellers)

    return (
        <section className="sm:px-24 px-4 py-5 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(500px,1fr))]">
            {
                sellers ?
                sellers.map((seller) => (
                    <SellerCard key={seller.id} seller={seller}/>
                )) :
                <h1>No seller</h1>
            }
        </section>
    )
}