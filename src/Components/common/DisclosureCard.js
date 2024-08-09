import { Disclosure, DisclosureButton } from "@headlessui/react";

import { FaCaretDown } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { ImCoinDollar } from "react-icons/im";

const DisclosureComponent = ({
  DisclosureImage,
  title,
  description,
  xpCount,
  tasks,
  QuestCount,
}) => {
  return (
    <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5 ">
      <Disclosure as="div" className="p-6 relative" defaultOpen={false}>
        <DisclosureButton className="group flex items-center justify-between">
          <span className="flex-[0_0_160px] h-[180px] p-[8px] rounded-[16px] border-[1px] border-[solid] border-[rgba(255,255,255,.2)] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] relative">
            <img
              className="object-cover w-full h-full rounded-[12px]"
              src={DisclosureImage}
              alt=""
            />
            <div className="w-max px-[24px] py-[11px] gap-[8px] rounded-[1000px] border-[1px] border-[solid] border-[var(--White-20,rgba(255,255,255,.2))] bg-[var(--Black-40,_rgba(0,_0,_0,_.4))] [box-shadow:0_0_5px_#0000001a] backdrop-filter backdrop-blur-[10px] absolute bottom-[16px] left-2/4 -translate-x-1/2">
              {QuestCount} Quests
            </div>
          </span>
          <div className="flex flex-col text-left ml-[15px] backdrop-filter backdrop-blur-[5px]">
            <div className="text-[23px] font-normal leading-[30px] mb-[8px]">
              {title}
            </div>
            <div className="text-[16px] font-normal leading-[20px] mb-[16px] overflow-hidden md:line-clamp-2 line-clamp-1 opacity-50">
              {description}
            </div>
            <hr
              className="relative w-full opacity-20"
              style={{
                borderStyle: "dashed",
                borderWidth: "0.5px",
                borderColor: "currentColor",
                borderImage:
                  "repeating-linear-gradient(to right, currentColor 0, currentColor 4px, transparent 4px, transparent 8px) 40",
              }}
            />
            <div className="mt-[16px]">
              <div className="h-[32px] px-[12px] py-[8px] justify-center items-start rounded-[1000px] border-[.5px] border-[solid] border-[rgba(255,255,255,.05)] bg-[rgba(255,_255,_255,_.07)] text-[14px] font-normal leading-[16px] flex items-center gap-[4px] w-max">
                <ImCoinDollar color="#e9ad03"/>
                {xpCount} XPs
              </div>
            </div>
          </div>
          <FaCaretDown className="size-6 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180 transition-1500 ease-in ml-[5px] mb-[170px] opacity-50" />
        </DisclosureButton>

        <Disclosure.Panel className="max-h-[350px] overflow-y-auto pr-4 mt-3 bg-[#111110] md:line-clamp-0 line-clamp-1 ">
          <div>
            {tasks &&
              tasks.map((task, index) => (
                <div
                  key={index}
                  className="rounded-[12px] border-[1px] border-[solid] border-[var(--White-05,rgba(255,255,255,.05))] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] p-[8px] flex items-center gap-[16px] cursor-pointer transition ease-in-out mb-2.5"
                >
                  <div className="flex-[0_0_120px] h-[80px]">
                    <img
                      src={task.imageSrc}
                      alt=""
                      className="object-cover w-full h-full rounded-[12px]"
                    />
                  </div>
                  <div className="text-white gap-2">
                    <div className="w-100 ">
                      <div className="[text-shadow:0px_0px_2px_rgba(0,_0,_0,_.4)] text-[18px] font-normal leading-[24px] mb-[16px] overflow-hidden">
                        {task.title}
                      </div>
                      <hr
                        className="relative w-full opacity-30"
                        style={{
                          borderStyle: "dashed",
                          borderWidth: "0.5px",
                          borderColor: "currentColor",
                          borderImage:
                            "repeating-linear-gradient(to right, currentColor 0, currentColor 4px, transparent 4px, transparent 8px) 40",
                        }}
                      />
                      <div className="flex items-center mt-[12px] gap-[10px]">
                        <div className="[text-shadow:0px_0px_2px_rgba(0,_0,_0,_.4)] text-[16px] font-light leading-[20px]">
                          {task.numTasks} Tasks
                        </div>
                        <div style={{ flexGrow: 1 }}>
                          <div className="relative rounded-[100px] bg-[rgba(255,_255,_255,_.01)] [box-shadow:0_-.5px_.5px_#fff3_inset,_0_.5px_.5px_#fff3_inset] h-[18px] p-[2px] flex-shrink-0 flex items-center max-w-[268px] w-full">
                            <div
                              className="rounded-[100px] border-[1px] border-[solid] border-[var(--Black-100,#000)] bg-[var(--White-07,_rgba(255,_255,_255,_.07))] [box-shadow:0_-2px_2px_#0006_inset,_0_2px_2px_#0006_inset] w-full h-full inline-flex items-center flex-shrink-0 overflow-hidden relative"
                              style={{ "--transform-offset": "-100%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[24px] h-[24px] p-[4px] justify-center items-center flex-shrink-0 rounded-[1000px] border-[1px] border-[solid] border-[var(--White-10,rgba(255,255,255,.1))] bg-[var(--White-05,_rgba(255,_255,_255,_.05))] backdrop-filter backdrop-blur-[10px] self-end">
                    <BiCheck />
                  </div>
                </div>
              ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default DisclosureComponent;
