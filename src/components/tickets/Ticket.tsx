import React from "react";
import clsx from "clsx";

type TTicket = {
  name: string;
  icon: React.ReactNode;
  currentLink: string;
  setCurrentLink: (val: string) => void;
};

function Ticket({ name, icon, currentLink, setCurrentLink }: TTicket) {
  const changeCurrentLink = (linkName: string) => {
    setCurrentLink(linkName);
  };
  return (
    <div
      className={clsx(
        `flex  items-center justify-center gap-2.5 w-44 py-5 
        cursor-pointer border-b-2 transition-colors font-bold`,
        currentLink.toLowerCase() === name.toLocaleLowerCase()
          ? "text-[#0C3DB9] border-b-[#0C3DB9]"
          : ""
      )}
      onClick={() => changeCurrentLink(name)}>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default Ticket;
