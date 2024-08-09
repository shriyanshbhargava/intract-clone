import React from "react";
import { Button } from "@headlessui/react";
import { BiCheck, BiInfoCircle, BiX } from "react-icons/bi";
import { BsFilePlayFill, BsFillClockFill } from "react-icons/bs";
import ClaimComponent from "../common/ClaimCard";
import DisclosureComponent from "../common/DisclosureCard";
import { RoadToSVG, RoadToSVG2, SVG3, SVG4 } from "../../assets/Icons";
import Footer from "../Footer/Footer";
import DictionaryComponent from "../common/DictionaryCard";
import CountdownTimer from "../common/CountdownCard";
import StickyButton from "../common/StickyButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Home = () => {
  const tasks = [
    {
      imageSrc:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
      title: "#1: But what is crypto and web3?",
      numTasks: 11,
    },
    {
      imageSrc:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
      title: "#1: But what is crypto and web3?",

      numTasks: 11,
    },
    {
      imageSrc:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
      title: "#1: But what is crypto and web3?",

      numTasks: 11,
    },
    {
      imageSrc:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
      title: "#1: But what is crypto and web3?",
      numTasks: 11,
    },
    {
      imageSrc:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
      title: "#1: But what is crypto and web3?",
      numTasks: 11,
    },
  ];

  return (
    <div className="Home">
      <div className="relative flex justify-center items-center">
        <img
          src="https://intract-clone.vercel.app/static/media/intract-academy-background-5547a705.2fbcaa3436f74a96d27d.png"
          alt="Intract Academy Background"
          className="w-full h-auto"
        />
        <div className="absolute flex flex-col items-center text-center px-4 sm:px-0">
          <img
            alt="gif"
            src="https://intract-clone.vercel.app/static/media/academy-animated-logo-57b2ae61.239cb230972862f504b8.gif"
            className="mix-blend-screen w-[150px] sm:w-[235px] transition-all duration-500 sm:ml-[11.5rem] md:ml-[1rem] md:mt-0 mt-[6rem]"
          />
          <p className="text-[12px] md:text-[20px] w-full font-normal leading-[24px] sm:leading-[28px] mt-4">
            Intract users{" "}
            <span className="opacity-50">have together made more than</span>{" "}
            $100 million <span className="opacity-50">in web3.</span>
            <br />
            <span className="opacity-50">Join them and</span> learn how to earn
            crypto!
          </p>
          <Button className="flex items-center rounded bg-[#6435e9] md:mt-4 mt-[30px] py-2 px-8 sm:px-14 text-sm gap-2 text-white opacity-80 hover:opacity-100">
            Get Started
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
      <section className="static">
        {/* Basics of Crypto */}
        <div className="absolute mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 md:ml-[10rem] md:top-[95%] top-[55%] z-40">
          <div className="">
            <DisclosureComponent
              DisclosureImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
              title="Basics of Crypto"
              description="The safest and easiest place to start your crypto journey!"
              QuestCount="6"
              xpCount="1490"
              tasks={tasks}
            />
          </div>
        </div>

        {/* Road to your learner nft */}
        <div className="absolute top-[125%] text-center hidden sm:block left-[30%] md:block hidden">
          <RoadToSVG />
        </div>

        {/* Learner NFT */}
        <div className="absolute mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 md:left-[75%] md:top-[130%] top-[45rem] left-[6rem]">
          <div className="flex justify-end">
            <ClaimComponent
              checkIcon={<BiCheck />}
              imageSrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
              lockIconSrc="https://www.intract.io/assets/lock-icon-2019798d.svg"
              title="Intract Certified: Learner NFT"
              description="Your crypto black-belt certificate"
            />
          </div>
        </div>

        {/* SVG ERROR */}
        {/* <div className="absolute mt-[16rem] ">
					<RoadToSVG2 />
				</div> */}

        {/* Introduction to Airdrops */}
        <div className="absolute mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 mt-8 sm:mt-0 mt-[50px] md:left-[40%] md:mt-[33rem] mt-[60rem]">
          <DisclosureComponent
            DisclosureImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
            title="Introduction to Airdrops"
            description="Your best bet to make it big in crypto!"
            QuestCount="4"
            xpCount="1040"
            tasks={tasks}
          />
        </div>

        <div className="absolute top-[190%] left-[23.5%] md:block hidden">
          <SVG3 />
        </div>

        {/* Earner NFT */}
        <div className="absolute mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 md:ml-[10rem] md:mt-[55%] mt-[75rem] ml-[7rem]">
          <div className="flex justify-start mt-8 sm:mt-0">
            <ClaimComponent
              checkIcon={<BiCheck />}
              imageSrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
              lockIconSrc="https://www.intract.io/assets/lock-icon-2019798d.svg"
              title="Intract Certified: Earner NFT"
              description="Your proof of airdrop expertise"
            />
          </div>
        </div>

        <div className="absolute mt-[60rem] -left-[6rem] md:block hidden">
          <SVG4 />
        </div>
      </section>

      {/* CountdownTimer */}
      <div className=" w-full md:w-[320px]  md:ml-[30rem] md:mt-[5rem] mx-auto md:mt-[81rem] md:ml-[40rem] md:block flex-col mt-[110rem]">
        <div className="relative p-3 sm:p-[.75rem] rounded-lg sm:rounded-[12px] border border-solid border-[rgba(255,255,255,.05)] bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-md sm:backdrop-blur-[30px] flex flex-col gap-4 md:mb-[0rem] mb-[0rem]">
          <div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <BsFillClockFill />
              Reward unlocks in
            </div>
          </div>
          <hr className="opacity-100 border-dashed border-[rgba(255,255,255,.1)] w-full" />
          <CountdownTimer />
        </div>
        <div className="w-full sm:w-[320px] rounded-lg sm:rounded-[12px] border border-solid border-[rgba(255,255,255,.1)] mt-4 sm:mt-[16px] bg-[rgba(255,255,255,.05)] p-3 sm:p-[12px] absolute md:mb-[0rem] mb-[3rem]">
          <img
            src="https://intract-clone.vercel.app/static/media/kol.e9f41bef17dc2e844e6f.gif"
            alt="gif"
            className="w-full h-48 sm:w-[296px] sm:h-[296px] rounded-md sm:rounded-[6px] border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(0,0,0,.2)] mb-4 sm:mb-[12px]"
          />
         
          <div className="flex items-center justify-between text-sm sm:text-base font-normal mb-4 sm:mb-[12px]">
            <div>Exclusive Community</div>
            <span className="flex items-center gap-1 sm:gap-[4px]">
              <img
                className="block align-middle"
                src="https://intract-clone.vercel.app/static/media/discord.3b0854cf4d40a82c346c940ab4dd8077.svg"
                alt="discord-icon"
              />
              <p>Earndrop</p>
            </span>
          </div>
          <hr className="border-0 h-px w-full" />
          <div className="text-xs sm:text-sm font-normal flex items-center justify-between mt-3 sm:mt-[12px]">
            <div>Complete all Essential quests</div>
            <div className="flex w-4 h-4 justify-center items-center flex-shrink-0 rounded-full border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-sm sm:backdrop-blur-[10px] text-xs">
              <BiCheck />
            </div>
          </div>
          <div className="text-xs sm:text-sm font-normal flex items-center justify-between mt-3 sm:mt-[12px]">
            <div>Complete at least 1 Alpha Hub quest today</div>
            <div className="flex w-4 h-4 justify-center items-center flex-shrink-0 rounded-full border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-sm sm:backdrop-blur-[10px] text-xs">
              <BiCheck />
            </div>
          </div>
          <div className="flex w-full py-2 justify-center items-center gap-2 rounded-md sm:rounded-[8px] border border-solid border-[rgba(255,255,255,.07)] bg-[rgba(255,255,255,.07)] text-center text-sm sm:text-base font-normal mt-3 sm:mt-[12px]">
            <div>Claim Now</div>
            <FaArrowRightLong />
          </div>
          
          <div className="w-full sm:w-[312px] rounded-md sm:rounded-[6px] border border-solid border-[rgba(255,255,255,.2)] bg-[#131313] shadow-md absolute top-1/2 right-0 sm:-right-[120%] transform -translate-y-1/2 md:left-[125%] md:-top-[22rem] mt-[22.5rem]">
            <div className="text-sm font-light px-4 sm:px-[16px] py-3 sm:py-[12px] border-b border-solid border-[rgba(255,255,255,.05)] flex items-center gap-2">
              Reward info
              <BiInfoCircle />
            </div>
            <div className="text-base font-normal p-4 sm:p-[16px]">
              <p className="text-gray-500 mb-2 leading-5">
                Free access to paid KOL (crypto earning) communities!
              </p>
              <br />
              <p className="text-gray-500 mb-2 leading-5">
                Win access to exclusive earning communities of some of the
                greatest earners in crypto for a month, every 24 hours. Get
                access to unmatched insights, a close-knit community of the best
                airdrop earners, and more.
              </p>
              <br />
              <p className="text-gray-500 mb-2 leading-5">
                To win: make sure you've connected your Twitter and Discord
                accounts - and follow our criteria!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white min-h-[1px] max-h-px md:mt-[45rem] mt-[60rem] mb-[3rem] opacity-10 md:my-[8rem]"></section>

      <div class="max-w-[1200px] md:ml-[12rem] ml-[4rem]">
        <div className="flex flex-col justify-center items-center font-[Outfit] not-italic font-normal tracking-[.117px] gap-[8px]">
          <div className="text-[24px] leading-[30px] text-center md:text-center md:w-full w-[80%] md:pb-0 pb-2">
            Top Crypto Creators and Projects to Follow
          </div>
          <div className="text-[16px] leading-[20px] text-center md:w-full w-[80%]">
            Answers to your crypto doubts, straight from the experts
          </div>
        </div>
        <div className="mt-[40px] flex flex-wrap gap-[16px] mb-[20px]">
          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              {/* <iframe
								width="100%"
								height="100%"
								className="block align-middle"
								src="https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe> */}
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <FaInstagram />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-60px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[3]"
                src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
                alt="How to plan your retirement with crypto?"
              />
              <img
                className="w-full h-full object-cover"
                src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
                alt="How to plan your retirement with crypto?"
              />
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                How to plan your retirement with crypto?
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              {/* <iframe
								width="100%"
								height="100%"
								className="block align-middle"
								src="https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe> */}
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
              <FaInstagram />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-60px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[3]"
                src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
                alt="Why are there limited Bitcoin?"
              />
              <img
                className="w-full h-full object-cover"
                src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
                alt="Why are there limited Bitcoin?"
              />
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                Why are there limited Bitcoin?
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              {/* <iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/9fyVLvY3P14?si=-02HNwqzZE3jXMz4&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe> */}
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
              <FaInstagram />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-60px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[3]"
                src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
                alt="How does Uniswap actually work?"
              />
              <img
                className="w-full h-full object-cover"
                src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
                alt="How does Uniswap actually work?"
              />
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                How does Uniswap actually work?
              </div>
            </div>
          </div>

          <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
            <div className="hidden">
              {/* <iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe> */}
              <span>
                <BiX style={{ fontSize: "24px" }} />
              </span>
            </div>
            <div className="block w-full h-full relative">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
              <FaInstagram />
              </div>
              <span className="inline-flex justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[36px] h-[60px] w-[60px] left-2/4 cursor-pointer opacity-0 transition-transform duration-300 ease-in-out">
                <BsFilePlayFill className="mt-1 ml-1" />
              </span>
              <img
                className="absolute bottom-[-60px] left-0 w-full h-[100px] filter blur-[15px] object-bottom scale-[3]"
                src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
                alt="How to spot crypto projects to invest in?"
              />
              <img
                className="w-full h-full object-cover"
                src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
                alt="How to spot crypto projects to invest in?"
              />
              <div className="text-shadow-[0px_0px_5px_rgba(0,0,0,.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] overflow-hidden overflow-ellipsis">
                How to spot crypto projects to invest in?
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white min-h-[1px] max-h-px my-[8rem] opacity-10"></section>
      <DictionaryComponent />
      <StickyButton />
      <section className="bg-white min-h-[1px] max-h-px my-[8rem] opacity-10"></section>
      <Footer />
    </div>
  );
};
