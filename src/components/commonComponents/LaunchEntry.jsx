import React from "react";
import { splitStringInHalf } from "../../utils/helperFunctions";

import heartOutlined from "../../assets/outlined-heart.svg";
import heartFilled from "../../assets/filled-heart.svg";

export default function LaunchEntry(props) {
  const { id, name, date, launchpad, onHandleLike, liked } = props;

  return (
    <div
      role="listitem"
      className="grid grid-cols-12 gap-1 text-sm bg-themeWhite text-themeBlack text-center py-2 border border-themeGrey divide-x md:text-base"
    >
      <div className="flex flex-col justify-center text-xs col-span-4 md:text-base">
        {name}
      </div>
      <div className="text-xs col-span-3 flex flex-col justify-center md:text-base">
        {new Date(date).toDateString()}
      </div>
      <div className="col-span-4 text-xs md:text-base">
        {splitStringInHalf(launchpad)}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <button onClick={() => onHandleLike(id)}>
          {
            <img
              className="h-4 origin-center hover:rotate-45 active:opacity-0"
              src={liked ? heartFilled : heartOutlined}
              alt="heart"
            />
          }
        </button>
      </div>
    </div>
  );
}
