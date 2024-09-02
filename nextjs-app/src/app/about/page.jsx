import Image from "next/image";
function AboutPage() {
  return (
    <div>
      <div className="imageContainer relative w-full h-1/2">
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
}

export default AboutPage;
