export const Footer = () => {
  return (
    <section className="flex justify-between px-24 py-14 gap-5 bg-popover-foreground">
      <div className="">
        <header>
          <h1 className="font-sans text-4xl font-black uppercase text-primary">
            trust.
          </h1>
        </header>
        <small className="text-[12px] text-stone-400">
          Where Reliability Meets Excellence, Delivering Trust and Quality You
          Can Depend On.
        </small>
        <footer className="mt-4 text-sm font-thin text-stone-400 font-poppins">
          TRUST. &copy; 2024. All Rights Reserved
        </footer>
      </div>
      {Array.from({ length: 3 }, (_, index) => index++).map((i) => (
        <ul key={i}>
          <li className="mb-4 text-lxl font-bold font-sans text-stone-400">
            Contoh
          </li>
          <li className="font-light font-poppins text-sm text-stone-500">
            Contoh list
          </li>
          <li className="font-light font-poppins text-sm text-stone-500">
            Contoh list
          </li>
          <li className="font-light font-poppins text-sm text-stone-500">
            Contoh list
          </li>
        </ul>
      ))}
    </section>
  );
};
