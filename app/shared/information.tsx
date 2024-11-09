import { info } from "~/data"


export default function Information() {
    return (
        <section className="px-28 pb-11 mt-10 flex gap-14">
            {
                info.map((inf, id) => (
                    <div className="flex gap-10" key={id}>
                        <div id="img">
                            <img className="w-[15rem]" src={inf.imgSrc} alt="Name" />
                        </div>
                        <div className="flex flex-col gap-3" id="text">
                            <h1 className="text-lg font-semibold">{inf.title}</h1>
                            <p className="text-[13px] font-light">{inf.description}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}