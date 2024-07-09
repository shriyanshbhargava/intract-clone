/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Button } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';
import './Home.css';
import {
	BiBook,
	BiCheck,
	BiInfoCircle,
	BiLogoDiscord,
	BiLogoSpotify,
	BiLogoTelegram,
	BiLogoTwitter,
	BiX,
} from 'react-icons/bi';
import { BsFilePlayFill, BsFillClockFill } from 'react-icons/bs';
import ClaimComponent from '../ClaimComponent';
import DisclosureComponent from '../DisclosureComponent';
import { RoadToSVG, RoadToSVG2 } from '../Icons';
import Footer from '../Footer';
import DictionaryComponent from '../DictionaryComponent';

const onChange = (key) => {
	console.log(key);
};

export const Home = () => {
	const tasks = [
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
	];

	const tasks2 = [
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
		{
			imageSrc:
				'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
			title: '#1: But what is crypto and...',
			numTasks: 11,
		},
	];

	return (
		<div className="Home">
			<div className="flex justify-center items-center">
				<img
					src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
					alt="Intract Academy Background"
					className="w-full h-auto"
				/>
				<div className="absolute">
					<img
						alt="gif"
						src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
						className="mix-blend-screen w-[235px] transition-all duration-500 ml-[11.5rem]"
					/>
					<p className="text-[20px] w-[100%] font-normal leading-[28px] text-center mt-[22px]">
						Intract users <span className="opacity-50">have together made more than</span> $100 million{' '}
						<span className="opacity-50">in web3.</span>
						<br />
						<span className="opacity-50">Join them and</span> learn how to earn crypto!
					</p>
					<Button className="flex rounded bg-[#6435e9] mt-[45px] ml-[32%] py-2 px-14 text-sm text-white data-[hover]:opacity-100 opacity-80">
						Get Started
						<img
							className="pl-3 pt-1"
							src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"
							alt="Angle Top Icon"
						/>
					</Button>
				</div>
			</div>
			<section>
				<div className="top-[40rem] left-[10rem] absolute ">
					<DisclosureComponent
						DisclosureImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
						title="Basics of Crypto"
						description="The safest and easiest place to start your crypto journey!"
						QuestCount="6"
						xpCount="1490"
						tasks={tasks}
					/>
				</div>
				{/* Road to your learner nft */}
				<div className="absolute top-[120%] left-[380px]">
					<RoadToSVG />
				</div>
				<div className="flex w-full justify-end relative mt-[5rem] pr-[150px] ">
					<ClaimComponent
						checkIcon={<BiCheck />}
						imageSrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
						lockIconSrc="https://www.intract.io/assets/lock-icon-2019798d.svg"
						title="Intract Certified: Learner NFT"
						description="Your crypto black-belt
certificate"
					/>

					<div className="rounded-[8px] absolute top-[46%]  overflow-hidden">
						<RoadToSVG2 />
					</div>
				</div>
			</section>
			<section>
				<div className="mt-[110px]">
					<div>
						<div className="w-[90%] m-auto pl-[180px] ">
							<DisclosureComponent
								DisclosureImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
								title="Introduction to Airdrops"
								description="Your best bet to make it big in crypto!"
								QuestCount="4"
								xpCount="1040"
								tasks={tasks}
							/>
						</div>
						<div className="top-full left-2/4 -translate-x-[60%]"></div>
					</div>
				</div>
				<div className="flex w-full justify-start relative mt-[25px] pl-[180px]">
					<div>
						<ClaimComponent
							checkIcon={<BiCheck />}
							imageSrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
							lockIconSrc="https://www.intract.io/assets/lock-icon-2019798d.svg"
							title="Intract Certified: Earner NFT"
							description="Your proof of
airdrop expertise"
						/>
					</div>
					<div className="top-full -left-2/5 translate-x-1/2">{/* svg2 */}</div>
				</div>
			</section>
			<div className="w-[320px] ml-[30rem] mt-[5rem]">
				<div className="relative p-[.75rem] rounded-[12px] border-[1px] border-[solid] border-[var(--White-05,rgba(255,255,255,.05))] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] backdrop-filter backdrop-blur-[30px] flex flex-col gap-4">
					<div>
						<div className="flex items-center gap-2">
							<BsFillClockFill />
							Reward unlocks in
						</div>
					</div>
					<hr className="opacity-100 border-[1px] border-[dashed] border-[rgba(255,255,255,.1)] w-full" />
					<div className="px-5 py-[.75rem] flex items-center justify-evenly gap-5 overflow-hidden relative rounded-[8px] border-[1px] border-[solid] border-[rgba(255,255,255,.1)] bg-[var(--Black-20,_rgba(0,_0,_0,_.2))] [box-shadow:-2px_-2px_5px_#0006_inset,_2px_2px_5px_#0006_inset]">
						<img
							className="w-full h-full object-cover absolute top-[0] left-[0]"
							src="https://www.intract.io/assets/dotBg-149528a0.png"
							alt="dot background"
						/>
						<div className="flex flex-col items-center relative max-w-[40px] min-w-[40px]">
							<h3>00</h3>
							<p>Days</p>
						</div>
						<div className="flex flex-col items-center relative max-w-[40px] min-w-[40px]">
							<h3>09</h3>
							<p>Hrs</p>
						</div>
						<div className="flex flex-col items-center relative max-w-[40px] min-w-[40px]">
							<h3>09</h3>
							<p>Mins</p>
						</div>
						<div className="flex flex-col items-center relative max-w-[40px] min-w-[40px]">
							<h3>15</h3>
							<p>Sec</p>
						</div>
					</div>
				</div>
				<div className="w-[320px] rounded-[12px] border-[1px] border-[solid] border-[rgba(255,255,255,.1)] mt-[16px] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] p-[12px] relative">
					<img
						src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
						alt="gif"
						className="w-[296px] h-[296px] rounded-[6px] border-[1px] border-[solid] border-[var(--White-10,rgba(255,255,255,.1))] bg-[rgba(0,_0,_0,_.2)] mb-[12px]"
					/>
					<div className="[text-shadow:0px_0px_2px_rgba(0,_0,_0,_.4)] text-[16px] font-normal leading-[20px] absolute top-[24px] right-[24px] px-[4px] py-[2px] rounded-[4px]">
						Lucky Draw
					</div>
					<div className="flex items-center justify-between text-[16px] font-normal leading-[20px] mb-[12px]">
						<div>Exclusive Community</div>
						<span className="flex items-center gap-[4px]">
							<img
								className="block align-middle"
								src="https://www.intract.io/assets/discord-50baa5cf.svg"
								alt="discord-icon"
							/>
							<p>Earndrop</p>
						</span>
					</div>
					<hr className="border-[0] h-px relative w-full" />
					<div className="text-[14px] font-normal leading-[16px] flex items-center justify-between mt-[12px]">
						<div>Complete all Essential quests</div>
						<div className="flex w-[16px] h-[16px] p-[4px] justify-center items-center flex-shrink-0 rounded-[1000px] border-[1px] border-[solid] border-[var(--White-10,rgba(255,255,255,.1))] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] backdrop-filter backdrop-blur-[10px] self-end text-[12px]">
							<BiCheck />
						</div>
					</div>
					<div className="text-[14px] font-normal leading-[16px] flex items-center justify-between mt-[12px]">
						<div>Complete at least 1 Alpha Hub quest today</div>
						<div className="flex w-[16px] h-[16px] p-[4px] justify-center items-center flex-shrink-0 rounded-[1000px] border-[1px] border-[solid] border-[var(--White-10,rgba(255,255,255,.1))] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] backdrop-filter backdrop-blur-[10px] self-end text-[12px]">
							<BiCheck />
						</div>
					</div>
					<div className="flex w-full px-[0] py-[10px] justify-center items-center gap-[8px] rounded-[8px] border-[1px] border-[solid] border-[var(--White-07,rgba(255,255,255,.07))] bg-[var(--White-07,_rgba(255,_255,_255,_.07))] text-center text-[16px] font-normal leading-[20px] mt-[12px]">
						<div>Claim Now</div>
						<img src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg" alt="Angle Top Icon" />
					</div>
					<img
						src="https://www.intract.io/assets/reward-info-path-571d6141.svg"
						alt="gif2"
						className="absolute top-[43%] -right-3/4 -translate-y-1/2 opacity-[50%]"
					/>
					<div className="w-[312px] rounded-[6px] border-[.5px] border-[solid] border-[var(--White-20,rgba(255,255,255,.2))] bg-[#131313] [box-shadow:0_2px_5px_#00000080] absolute top-[0] -right-[120%] -translate-y-[45%]">
						<div className="text-[14px] font-light leading-[16px] px-[16px] py-[12px] border-b-[1px_solid_rgba(255,_255,_255,_.05)] flex items-center gap-2">
							Reward info
							<BiInfoCircle />
						</div>
						<div className="text-[16px] font-normal leading-[20px] p-[16px]">
							<p className="text-[#7d7d7d] mb-[10px] font-normal leading-[1.3]">
								<span>Free access to paid KOL (crypto earning) communities!</span>
							</p>
							<br />
							<p className="text-[#7d7d7d] mb-[10px] font-normal leading-[1.3]">
								Win access to exclusive earning communities of some of the greatest earners in crypto
								for a month, every 24 hours. Get access to unmatched insights, a close-knit community of
								the best airdrop earners, and more.
							</p>
							<br />
							<p className="text-[#7d7d7d] mb-[10px] font-normal leading-[1.3]">
								To win: make sure you've connected your Twitter and Discord accounts - and follow our
								criteria!
							</p>
						</div>
					</div>
				</div>
			</div>
			<section className="bg-white min-h-[1px] max-h-px my-[8rem] opacity-10"></section>
			<div class="max-w-[1200px] mt-[28px] ml-[12rem]">
				<div className="flex flex-col justify-center items-center font-[Outfit] not-italic font-normal tracking-[.117px] gap-[8px]">
					<div className="text-[24px] leading-[30px]">Top Crypto Creators and Projects to Follow</div>
					<div className="text-[16px] leading-[20px] text-center">
						Answers to your crypto doubts, straight from the experts
					</div>
				</div>
				<div className="mt-[40px] flex flex-wrap gap-[16px] mb-[20px]">
					<div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] flex flex-col justify-between relative overflow-hidden">
						<div className="hidden">
							<iframe
								width="100%"
								height="100%"
								className="block align-middle"
								src="https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe>
							<span>
								<BiX style={{ fontSize: '24px' }} />
							</span>
						</div>
						<div className="block w-full h-full relative">
							<div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
								<img
									className="block align-middle"
									src="https://www.intract.io/assets/reel-video-ee824737.svg"
									alt="reel-icon"
								/>
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
							<iframe
								width="100%"
								height="100%"
								className="block align-middle"
								src="https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe>
							<span>
								<BiX style={{ fontSize: '24px' }} />
							</span>
						</div>
						<div className="block w-full h-full relative">
							<div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
								<img
									className="block align-middle"
									src="https://www.intract.io/assets/reel-video-ee824737.svg"
									alt="reel-icon"
								/>
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
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/9fyVLvY3P14?si=-02HNwqzZE3jXMz4&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe>
							<span>
								<BiX style={{ fontSize: '24px' }} />
							</span>
						</div>
						<div className="block w-full h-full relative">
							<div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
								<img
									className="block align-middle"
									src="https://www.intract.io/assets/reel-video-ee824737.svg"
									alt="reel-icon"
								/>
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
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe>
							<span>
								<BiX style={{ fontSize: '24px' }} />
							</span>
						</div>
						<div className="block w-full h-full relative">
							<div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
								<img
									className="block align-middle"
									src="https://www.intract.io/assets/reel-video-ee824737.svg"
									alt="reel-icon"
								/>
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
			<section className="bg-white min-h-[1px] max-h-px my-[8rem] opacity-10"></section>
			<Footer />
		</div>
	);
};
