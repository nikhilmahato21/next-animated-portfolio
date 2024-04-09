import Image from "next/image";

const Homepage = () => {
  return (
    <div>
      <Image
        src="/avatar1.jpeg"
        width={250}
        height={200}
        className="blob border border-black"
      ></Image>
    </div>
  );
};

export default Homepage;
