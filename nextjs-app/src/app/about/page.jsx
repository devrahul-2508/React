import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-between items-center">
      <div className="textContainer flex-1 space-y-5">
        <h2 className="text-blue-800 font-bold text-xl">About Agency</h2>
        <h1 className="text-white font-bold text-6xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. We’re the world’s
          Special Team, the best consulting & finance solution provider,
          offering a wide range of web and software development services.
        </p>
        <div className="flex flex-row text-blue-800 font-semibold justify-between text-xl">
          <div>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className="imageContainer flex flex-1 justify-end">
        <div className="relative w-96 h-96">
          <Image
            src="/about.png"
            alt="About Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
