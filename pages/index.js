import Head from "next/head";
import Image from "next/image";
import ProfilePfp from "../assests/pfp.png";
import Telegram from "../assests/telegram.svg";
import Twitter from "../assests/twitter.svg";
import Link from "next/link";
import MetaPfp from "../public/pfp.png";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center relative">
      {/* background bigger image */}
      <div className="absolute z-0 Background_Image -right-52 select-none">
        <Image
          className="h-screen w-full scale-150"
          draggable="false"
          src={ProfilePfp}
        ></Image>
      </div>
      <Head>
        <title>DukeOfBetting</title>
        <link
          rel="icon"
          type="image/png"
          sizes="1000x1000"
          href={"/pfp.png"}
        ></link>
      </Head>
      {/* Image Profile */}
      <div className="rounded-full overflow-hidden relative w-32 h-32 flex items-center justify-center my-10 z-10">
        <Image
          className="ImageClass absolute -top-1 -left-1 select-none"
          alt="profile picture"
          src={MetaPfp}
          width={400}
          height={400}
          draggable="false"
        />
      </div>
      {/* Title */}
      <div className="text-2xl font-bold spacing tracking-wide z-10">
        <div className="bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-clip text-transparent bg-clip-text font-bold text-4xl">DukeOfBetting</div>
      </div>
      {/* HeadLine */}
      <div className="mt-10 text-2xl text-center z-10 gap-y-4 flex flex-col items-center sm:gap-0">
        <div className="text-3xl bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-clip text-transparent bg-clip-text font-bold">{`Leading sports statistician & predictor. It’s never luck.`}</div>
        <div className="bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-clip text-transparent bg-clip-text font-bold">{`Join our pages completely free, below.`}</div>
      </div>
      {/* buttons */}
      <div className="flex flex-row items-center w-full mt-10 justify-center gap-x-4 sm:gap-x-20 select-none z-10">
        <Link href={"https://twitter.com/DukeOfBetting"}>
          <div className="bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 rounded-full p-[1px]">
            <div className="bg-[#1d3039] text-white font-normal py-[10px] px-[25px] rounded-full flex flex-row items-center cursor-pointer gap-x-2">
              <div className="">
                <Image className="" width={20} height={20} src={Twitter} />
              </div>
              <div className="bg-gradient-to-bl from-cyan-100 via-indigo-200 to-emerald-100 font-bold text-clip text-transparent bg-clip-text">
                Twitter
              </div>
            </div>
          </div>
        </Link>
        <Link href={"https://t.me/+-QWBJqTTnIBjNGY0"}>
          <div className="bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-[#1d3039] font-bold py-[10px] px-[25px] rounded-full flex flex-row items-center cursor-pointer gap-x-2">
            <div className="">
              <Image className="" width={20} height={20} src={Telegram} />
            </div>
            <div>Telegram</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
