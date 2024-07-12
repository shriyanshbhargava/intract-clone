import React from 'react';
import { BiBook } from 'react-icons/bi';

const DictionaryComponent = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[28px] px-4 lg:px-0">
      <div className="flex flex-col justify-center items-center font-[Outfit] not-italic font-normal tracking-[.117px] gap-[8px]">
        <div className="text-[24px] leading-[30px] text-center">Crypto Dictionary</div>
        <div className="text-[16px] leading-[20px] text-center">
          Your one-stop to catch up on all crypto terms
        </div>
      </div>
      <div className="w-full mt-[30px] relative cursor-pointer overflow-hidden rounded-[16px] border border-[rgba(255,255,255,.2)]">
        <img
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
          alt=""
          className="object-cover bg-[rgba(255,255,255,.05)] w-full"
        />
        <img
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
          alt=""
          className="absolute -bottom-[100px] left-0 h-[100px] w-full filter blur-[15px] object-cover object-bottom scale-[3]"
        />
        <div className="w-full absolute bottom-0 left-0 rounded-bl-[16px] rounded-br-[16px] flex flex-col lg:flex-row justify-between items-center p-[16px] lg:p-[24px]">
          <div className="font-[Outfit] not-italic font-normal tracking-[.117px] text-center lg:text-left mb-4 lg:mb-0">
            <div className="[text-shadow:0px_0px_5px_rgba(0,_0,_0,_.1)] text-[24px] leading-[30px] mix-blend-lighten">
              Web3 + Degen Glossary
            </div>
            <div className="[text-shadow:0px_0px_5px_rgba(0,_0,_0,_.1)] text-[16px] leading-[20px]">
              Your own crypto dictionary
            </div>
          </div>
          <div className="flex w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] p-[10px] lg:p-[20px] justify-center items-center rounded-full border border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)] backdrop-filter backdrop-blur-[20px] text-[20px]">
            <BiBook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryComponent;
