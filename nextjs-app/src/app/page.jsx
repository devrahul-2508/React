import Image from "next/image";
function Home() {
  return (
    <div className="homeContainer flex flex-col md:flex-row items-center justify-between">
      <div className="textContainer flex flex-1 flex-col gap-5">
        <h1 className="font-bold text-6xl">Creative Thoughts Agency</h1>
        <p>
          Lorem, Ipsum dolor sit amet consectetur adipisicing elit. Vitae
          blanditiis minima reprehenderit assumenda dolore.
        </p>
        <div className="space-x-3">
          <button className="bg-blue-700 text-white p-2">Learn More</button>
          <button className="bg-white text-black p-2">Contact</button>
        </div>
        <div className=" h-40 w-80 relative">
          <Image src="/brands.png" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="imageContainer flex flex-1 justify-end">
        <div className="relative w-96 h-96">
          <Image
            src="/hero.gif"
            alt="About Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
