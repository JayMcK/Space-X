import React from "react";

import trashCan from "../../assets/trashCan.svg";

export default function LaunchEntry(props) {
  const { id, name, date, launchpad, onHandleDelete } = props;

  return (
    <div className="grid grid-cols-12 gap-1 bg-themeWhite text-themeBlack text-center py-2 border border-themeGrey divide-x">
      <div className="col-span-4">{name}</div>
      <div className="col-span-3 flex flex-col justify-center">
        {new Date(date).toDateString()}
      </div>
      <div className="col-span-4">{launchpad}</div>
      <div className="col-span-1">
        <button onClick={() => onHandleDelete(id)}>
          {
            <img
              className="h-4 origin-center hover:rotate-45 active:opacity-0"
              src={trashCan}
              alt="trash can"
            />
          }
        </button>
      </div>
    </div>
  );
}
