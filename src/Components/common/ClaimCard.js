import { LockClosedIcon } from "@heroicons/react/24/outline";
import { MdLockOutline } from "react-icons/md";

const ClaimComponent = ({
  checkIcon,
  imageSrc,
  lockIconSrc,
  title,
  description,
}) => {
  return (
    <div>
      <div className="flex w-[48px] h-[48px] p-[12px] justify-center items-center rounded-full border border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-[10px] text-[28px] ml-[55px]">
        {checkIcon}
      </div>
      <div className="w-[160px] relative z-10">
        <div className="w-[160px] h-[180px] rounded-[24px] border border-solid border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.05)] backdrop-filter backdrop-blur-[10px] justify-end mr-[120px] mt-[16px] flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt=""
            className="w-[147px] h-[165px] rounded-[20px] object-cover"
          />
        </div>
        <div className="flex w-[48px] h-[48px] p-[12px] justify-center items-center rounded-full border border-solid border-[rgba(255,255,255,.2)] bg-[#131313] backdrop-filter backdrop-blur-[10px] absolute bottom-0 right-0 translate-x-[34%] translate-y-[35%]">
        <MdLockOutline className="flex align-middle" alt="" />
        </div>
      </div>
      <div className="[text-shadow:0px_0px_2px_rgba(0,0,0,.4)] text-[20px] font-normal leading-[24px] mb-[8px] mt-[16px] opacity-70 w-40 md:w-full">
        {title}
      </div>
      <div className="[text-shadow:0px_0px_2px_rgba(0,0,0,.4)] text-[16px] font-normal leading-[20px] mb-[16px] opacity-30 w-40 md:w-full">
        {description}
      </div>
      <button className="rounded-[8px] border border-solid border-[rgba(255,255,255,.05)] bg-[rgba(255,255,255,.05)] flex w-[160px] px-0 py-[10px] justify-center items-center text-[16px] font-normal leading-[20px] !cursor-not-allowed">
        <div className="opacity-50">Claim</div>
      </button>
    </div>
  );
};

export default ClaimComponent;
