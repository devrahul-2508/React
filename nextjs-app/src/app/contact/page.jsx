// "use client";
import Image from "next/image";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="imageContainer flex flex-1">
        <div className="relative w-96 h-96">
          <Image
            src="/contact.png"
            alt="About Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex-1">
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className=" flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name and Surname"
            className="bg-slate-800 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="bg-slate-800 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="bg-slate-800 p-2 rounded-md"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="bg-slate-800 p-2 rounded-md"
          ></textarea>
          <button className="bg-blue-700 text-white p-2 rounded">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
