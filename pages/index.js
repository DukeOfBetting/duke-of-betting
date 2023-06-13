import Head from "next/head";
import Image from "next/image";
import ProfilePfp from "../assests/pfp.png";
import Telegram from "../assests/telegram.svg";
import Twitter from "../assests/twitter.svg";
import Link from "next/link";
import MetaPfp from "../public/pfp.png";

const ChatImage =
  "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwIiB3aWR0aD0iMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIGhlaWdodD0iMTM4LjclIiB3aWR0aD0iMTMxLjQlIiB4PSItMTUuNyUiIHk9Ii0xNS4xJSI+PGZlTW9ycGhvbG9neSBpbj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjEiLz48ZmVPZmZzZXQgZHk9IjEiIGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA3IDAiLz48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTE0LjIzIDIwLjQ2bC05LjY1IDEuMUwzIDUuMTIgMzAuMDcgMmwxLjU4IDE2LjQ2LTkuMzcgMS4wNy0zLjUgNS43Mi00LjU1LTQuOHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center relative">
      {/* chat incons */}

      <div className="absolute bottom-3 right-3 z-50">
        <Link href="https://t.me/DukeOfBettingBOT">
          <Image
            className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 p-2.5 rounded-full"
            width={30}
            height={30}
            src={ChatImage}
          />
        </Link>
      </div>
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
        <div className="bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-clip text-transparent bg-clip-text font-bold text-4xl py-1">
          DukeOfBetting
        </div>
      </div>
      {/* HeadLine */}
      <div className="mt-10 text-center z-10 gap-y-4 flex flex-col items-center sm:gap-0">
        <div className="text-2xl sm:text-3xl bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-clip text-transparent bg-clip-text font-bold ">{`Leading sports statistician & predictor. It’s never luck.`}</div>
        <div className="text-sm sm:text-2xl bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 text-clip text-transparent bg-clip-text font-bold">{`Join our pages completely free, below.`}</div>
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
      <div className="flex flex-row items-center w-full mt-10 justify-center gap-x-4 sm:gap-x-20 select-none z-10">
        <Link href={"https://t.me/DukeOfBettingBOT"}>
          <div className="bg-gradient-to-bl from-cyan-200 via-indigo-400 to-emerald-200 rounded-full p-[1px]">
            <div className="bg-[#1d3039] text-white font-normal py-[10px] px-[25px] rounded-full flex flex-row items-center cursor-pointer gap-x-2">
              <div className="">
                {/* <Image className="" width={20} height={20} src={Twitter} /> */}
              </div>
              <div className="bg-gradient-to-bl from-cyan-100 via-indigo-200 to-emerald-100 font-bold text-clip text-transparent bg-clip-text">
                Telegram VIP Group 🔒
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
