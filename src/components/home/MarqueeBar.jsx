import React from "react";
import { MARQUEE_NOTICES } from "../../constants/homeData";
import bellIcon from "../../assets/images/bell-icon.png";

/**
 * MarqueeBar
 * A scrolling ticker bar that sits directly below the HeroSlider.
 * Uses the native <marquee> approach via CSS animation for full browser support
 * and smooth infinite looping — no library needed.
 */

// Join all notices into one long string separated by a spacer
const TEXT = MARQUEE_NOTICES.join("          ✦          ");

const MarqueeBar = () => (
  <div className="w-full bg-[#1a1a1a] border-t-2 border-[#86c724] overflow-hidden">
    <div className="flex items-center">

      {/* Static label badge */}
      <div className="flex-shrink-0 text-white text-[11px] bg-white sm:text-xs font-bold
                      uppercase tracking-widest px-2 sm:px-4 py-3 whitespace-nowrap
                      flex items-center gap-1.5 self-stretch">
        <img
          src={bellIcon}
          alt="Notice"
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain "
        />
      </div>

      {/* Scrolling track */}
      <div className="flex-1 overflow-hidden py-2.5 sm:py-3">
        <div className="marquee-track whitespace-nowrap">
          {/* Duplicate text so it loops seamlessly */}
          <span className="marquee-content text-gray-200 text-[12px] sm:text-[13px] leading-relaxed">
            <span className="text-[#9ed42e] font-normal normal-case tracking-normal">Important Notice: </span>
            {TEXT}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#9ed42e] font-normal normal-case tracking-normal">Important Notice: </span>
            {TEXT}
          </span>
        </div>
      </div>
    </div>

    {/* Inline keyframe — avoids needing a separate CSS file */}
    <style>{`
      .marquee-track {
        display: inline-block;
        animation: marquee-scroll 40s linear infinite;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default MarqueeBar;
