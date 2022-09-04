import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col w-full h-full rounded-full bg-primary cursor-pointer`}
    >
      <div className={`${styles.flexCenter} flex-row mb-1`}>
        <p className="font-poppins font-medium text-[24px] mr-2 leading-[23px]">
          <span className="text-gradient"> Get </span>
        </p>
        <img src={arrowUp} alt="" className="w-[23px] h-[23px]" />
      </div>
      <p className="font-poppins font-medium text-[24px] leading-[23px]">
        <span className="text-gradient"> Started </span>
      </p>
    </div>
  </div>
);

export default GetStarted;
