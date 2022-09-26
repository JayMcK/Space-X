import React from "react";

import heartOutlined from "../../assets/outlined-heart.svg";
import heartFilled from "../../assets/filled-heart.svg";

export default function LaunchEntry(props) {
  const { id, name, date, launchpad, onHandleLike, liked } = props;

  return (
    <div className="grid grid-cols-12 gap-1 bg-themeWhite text-themeBlack text-center py-2 border border-themeGrey divide-x">
      <div className="col-span-4">{name}</div>
      <div className="col-span-3 flex flex-col justify-center">
        {new Date(date).toDateString()}
      </div>
      <div className="col-span-4">{launchpad}</div>
      <div className="col-span-1">
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
