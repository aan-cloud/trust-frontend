export default function Background () {
    return (
       <div className="relative h-screen w-full">
  <video autoPlay loop muted playsInline className="absolute -z-10 top-0 left-0 h-full w-full object-cover">
    <source src="https://ucarecdn.com/3f99659b-2888-40f0-85b0-af727fe6c1aa/" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="relative z-10 flex items-start flex-col justify-end p-20 h-full">
    <h1 className="text-white text-8xl font-medium font-roboto tracking-widest">Trust<sup>&copy;</sup></h1>
    <p className="text-white text-8xl font-medium font-poppins">Just believe it</p>
  </div>
</div>
    )
}