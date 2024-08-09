import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  // Target date for countdown (adjust as needed)
  const targetDate = new Date("2028-07-31T00:00:00Z");

  return (
    <div className="px-2 py-3 sm:px-5 sm:py-[.75rem] flex items-center justify-evenly gap-2 sm:gap-5 overflow-hidden relative rounded-lg sm:rounded-[8px] border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(0,0,0,.2)] shadow-inner">
      <Countdown
        date={targetDate}
        className="countdown-item"
        renderer={({ days, hours, minutes, seconds }) => (
          <>
            <div className="flex flex-col items-center relative w-10">
              <h3 className="text-base sm:text-lg">{days}</h3>
              <p className="text-xs sm:text-sm">Days</p>
            </div>
            <div className="flex flex-col items-center relative w-10">
              <h3 className="text-base sm:text-lg">{hours}</h3>
              <p className="text-xs sm:text-sm">Hrs</p>
            </div>
            <div className="flex flex-col items-center relative w-10">
              <h3 className="text-base sm:text-lg">{minutes}</h3>
              <p className="text-xs sm:text-sm">Mins</p>
            </div>
            <div className="flex flex-col items-center relative w-10">
              <h3 className="text-base sm:text-lg">{seconds}</h3>
              <p className="text-xs sm:text-sm">Sec</p>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CountdownTimer;
