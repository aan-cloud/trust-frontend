export default function Background () {
    return (
        <div className="relative bg-[url('https://ucarecdn.com/6d7116af-a08a-445f-85d4-6d9fca65a6bb/')] bg-cover bg-no-repeat bg-center h-[calc(100vh-160px)] w-full flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white p-4">
            <h1 className="text-6xl text-center font-bold font-poppins text-white mb-3">
                TRUST
            </h1>
            <h3 className="text-2xl font-semibold font-poppins text-white">
                Buy spare parts from trusted manufacturers
            </h3>
            </div>
        </div>
    )
}