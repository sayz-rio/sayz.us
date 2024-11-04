import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black h-screen flex items-center justify-center">
      <div className="bg-black">
        <Image 
        draggable="false"
        src="https://ucarecdn.com/86e3de83-bd71-4ba0-9da7-d9d9335d8ee2/sayztransparent.png"
        alt="sayz-transparent.png" 
        width={100} 
        height={100}
        priority
        className=" shadow shadow-[#828282] rounded-full cursor-alias" />
        <div className="flex items-center justify-center mt-2">
          <p className="text-white text-xl font-semibold">sayz.us</p>
        </div>
        <div className="flex flex-row justify-center gap-2 mt-2">
          <Link href="https://www.facebook.com/sayz.moon" className="">
            <Image src="/social/ic_facebook.svg" width={26} height={26} alt="facebook" className="text-white" />
          </Link>
          <Link href="https://github.com/sayz-rio" className="">
            <Image src="/social/github.svg" width={24} height={24} alt="github" className="text-white" />
          </Link>
        </div>
      </div>
    </main>
  );
}
