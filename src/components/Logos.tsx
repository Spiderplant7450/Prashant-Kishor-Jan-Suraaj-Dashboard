import React from "react";
import logoPng from "../assets/images/logo.png";
import bagJpg from "../assets/images/images.jpg";

/**
 * Renders the uploaded official Jan Suraaj party logo image (logo.png)
 */
export function PartyLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src={logoPng}
      alt="Jan Suraaj Party Logo"
      referrerPolicy="no-referrer"
      className={`${className} object-contain select-none shrink-0`}
    />
  );
}

/**
 * Renders the uploaded official School Bag election symbol image (images.jpg)
 */
export function SchoolBagLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src={bagJpg}
      alt="Official Symbol - School Bag"
      referrerPolicy="no-referrer"
      className={`${className} object-contain select-none shrink-0`}
    />
  );
}
