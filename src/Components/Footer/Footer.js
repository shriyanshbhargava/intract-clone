import React from "react";
import {
  BiLogoTwitter,
  BiLogoDiscord,
  BiLogoTelegram,
  BiLogoSpotify,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="opacity-1">
      <div className="max-w-[1200px] mx-auto p-4 lg:p-[2em]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:pr-[120px]">
          <a
            href="/"
            className="max-w-[300px] gap-y-[18px] flex-col items-start flex mb-4 lg:mb-0"
          >
            <div>
              <a
                className="float-left text-[#333] no-underline relative"
                href="/"
              >
                <div className="d-none d-md-block">
                  <div className="text-white h3 mb-0 text-4xl">intract.</div>
                </div>
              </a>
            </div>
            <div className="footer-paragraph-holder">
              <p className="text-[#7d7d7d] mb-[10px] font-normal leading-[1.3]">
                We are your personal guide for exploring web3 projects &amp;
                earning 100x rewards
              </p>
            </div>
          </a>
          <div className="flex flex-wrap gap-8 lg:gap-x-[60px]">
            <FooterColumn title="Intract">
              <FooterLink href="/quests">Explore Quests</FooterLink>
              <FooterLink href="/communities">Communities</FooterLink>
              <FooterLink href="/alpha-hub">Alpha Hub</FooterLink>
            </FooterColumn>
            <FooterColumn title="Earn">
              <FooterLink href="/referral">Refer &amp; Earn</FooterLink>
              <FooterLink href="/leaderboard">Leaderboard</FooterLink>
              <FooterLink href="/achievements">Achievements</FooterLink>
            </FooterColumn>
            <FooterColumn title="About">
              <FooterLink href="https://docs.intract.io" target="_blank" rel="noopener noreferrer">
                Product Roadmap
              </FooterLink>
              <FooterLink
                href="https://docs.intract.io/for-project/affiliate-+-sign-up-usd500-bonus"
                target="_blank"
				rel="noopener noreferrer"
              >
                Affiliate Program
              </FooterLink>
              <FooterLink
                href="https://docs.intract.io/for-business/sign-up-program"
                target="_blank"
				rel="noopener noreferrer"
              >
                Sign up Program
              </FooterLink>
              <FooterLink
                href="https://forms.gle/tdjCuL1HJ1EzhQpq8"
                target="_blank"
				rel="noopener noreferrer"
              >
                Growth Community
              </FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
            </FooterColumn>
            <FooterColumn title="Support">
              <FooterLink
                href="https://intract-io.notion.site/Intract-Quests-Campaigns-FAQ-6ac66e1a71374f0b9d1f90fe92c7928f?pvs=4"
                target="_blank"
				rel="noopener noreferrer"
              >
                Help Center
              </FooterLink>
              <FooterLink href="https://app.intract.io" target="_blank" rel="noopener noreferrer">
                Create your quest
              </FooterLink>
              <FooterLink
                href="https://intract.gitbook.io/website-policies/intract-terms-of-use"
                target="_blank"
				rel="noopener noreferrer"
              >
                Terms of Service
              </FooterLink>
              <FooterLink
                href="https://intract.gitbook.io/website-policies/intract-privacy-policy"
                target="_blank"
				rel="noopener noreferrer"
              >
                Privacy Policy
              </FooterLink>
              <FooterLink
                href="https://intract.gitbook.io/website-policies/intract-community-guidelines"
                target="_blank"
				rel="noopener noreferrer"
              >
                Community Guidelines
              </FooterLink>
            </FooterColumn>
          </div>
        </div>
        <div className="w-full border-t border-[#2b2b2b] flex flex-col lg:flex-row justify-between items-center mt-[40px] pt-[40px]">
          <p className="max-w-[1200px] text-sm lg:text-base opacity-50">
            <span className="text-white font-bold">Disclaimer: </span>
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </p>
        </div>
        <div className="w-full border-t border-[#2b2b2b] mt-[40px] pt-[40px] flex flex-col lg:flex-row justify-between items-center">
          <div className="uppercase text-sm lg:text-base">
            Created by{" "}
            <a
              href="https://app.intract.io"
              target="_blank"
			  rel="noopener noreferrer"
              className="text-[#fff] underline transition-colors duration-375 pl-1"
            >
              Intract
            </a>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <FooterIcon icon={<BiLogoTwitter color="1D9BF0" />} />
            <FooterIcon icon={<BiLogoDiscord color="5865F2" />} />
            <FooterIcon icon={<BiLogoTelegram color="32ABE2" />} />
            <FooterIcon icon={<BiLogoSpotify color="1ED760" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterColumn = ({ title, children }) => (
  <div className="gap-y-[10px] flex-col justify-start items-start flex">
    <div className="tracking-[0] uppercase font-normal leading-[1.2]">
      {title}
    </div>
    {children}
  </div>
);

const FooterLink = ({ href, target, children }) => (
  <a
    className="text-[#7d7d7d] leading-[1.2] no-underline transition-colors duration-[0.475s]"
    href={href}
    target={target}
  >
    {children}
  </a>
);

const FooterIcon = ({ icon }) => (
  <div className="bg-gray-900 rounded pointer p-2">{icon}</div>
);

export default Footer;
