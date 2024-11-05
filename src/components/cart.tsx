import { CartTypes } from "../types/cart";

export const Cart: React.FC<CartTypes> = ({ id, items, total }) => {

    const message = `Name = ${"Your name"}
    Email = ${"Your email"}
    Product name = ${items.map(item => item.product.name).join(", ")}
    Quantity = ${items.map(item => item.quantity)}
    Total price = ${total}`.trim();

    const encodedMessage = encodeURIComponent(message);

    return (
        <>
            <div id="bag" className="flex flex-col justify-start gap-6 w-[60%]" key={id}>
                <h1 className="text-2xl font-bold text-white font-poppins mb-3">Bag</h1>
                { items.length ? items.map((item) => (
                    <div className="h-[20%] flex items-start justify-between border border-gray-400 rounded-md p-4">
                    <div className="flex gap-3">
                    <div className="w-[30%] h-24 bg-gray-200 rounded-sm flex items-center justify-center">
                        <img src={item.product.imageUrl} alt="Cable" className="object-contain"/>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-white font-semibold">{ item.product.name }</h2>
                        <small className="font-extralight text-gray-100 mb-8">Stock {item.product.stock}</small>
                        <small className="font-extralight text-gray-100">Quantity {item.quantity}</small>
                    </div>
                    </div>
                    <h3 className="font-extralight text-gray-100 text-base">{`RM${item.product.price}`}</h3>
                </div>
                )) : (<p className="text-red-600 text-xl font-semibold">You have no items</p>)}
                </div>
            <div id="summary" className="flex flex-col gap-3 w-[35%]">
                <h1 className="text-2xl font-bold text-white font-poppins mb-4">Summary</h1>
                <div id="subtotal" className="border-b border-white pb-4">
                    <div className="flex justify-between"> 
                        <small className="text-white font-poppins font-normal text-base">Subtotal</small>
                        <small className="text-gray-100 font-poppins font-normal text-base">{total}</small>
                    </div>
                    <div className="flex justify-between">
                        <small className="text-white font-poppins font-normal text-base">Delivery cost</small>
                        <small className="text-gray-100 font-poppins font-normal text-base">Free</small>
                    </div>
                </div>
                <div id="total" className="flex justify-between border-b border-white pb-4 mb-6" >
                    <small className="text-white font-poppins font-normal text-base">Total</small>
                    <small className="text-gray-100 font-poppins font-normal text-base">{total}</small>
                </div>
                <button className="px-7 py-3 bg-white text-black rounded-xl">
                    <a href={`https://api.whatsapp.com/send/?phone=60177671526&text=${encodedMessage}&app_absent=0`} className="font-semibold block w-full h-full">Checkout</a>
                </button>
            </div>
        </>
    )
};