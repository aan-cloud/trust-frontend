import Image from "next/image"
import { Button } from "./button"
import { productDashboardSchema } from "@/schema/product";
import { z } from "zod";

export const SubmitProductCard = ({
  product,
}: {
  product: z.infer<typeof productDashboardSchema>;
}) => {
    return (
        <div className="flex pb-5 flex-col gap-4 sm:w-fit bg-light shadow-md">
            <div className="sm:min-w-full min-w-40 sm:min-h-[270px] sm:max-h-60" id="image">
                <Image 
                    className="object-cover w-full h-full"
                    src={product.imageUrl[0].imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                />
            </div>
            <div className="flex flex-col gap-1 px-2" id="description">
                <h2 className="font-poppins font-semibold text-base">{product.name}</h2>
                <small className="font-poppins text-gray-700 overflow-hidden">{product.description}</small>
                <Button className="mt-3 w-[30%]">Edit</Button>
            </div>
        </div>
    )
}