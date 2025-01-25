export const Footer = () => {
  return (
    <section className="sm:flex-row flex flex-col justify-between px-4 sm:px-24 py-14 gap-5 sm:gap-32 bg-popover-foreground">
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] sm:flex sm:justify-between sm:flex-grow gap-1">
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
      </div>
    </section>
  );
};
