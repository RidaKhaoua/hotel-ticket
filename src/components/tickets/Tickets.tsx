import { links } from "@constants/index";
import Ticket from "./Ticket";
import { useState } from "react";

function Tickets() {
  const [currentLink, setCurrentLink] = useState("Hotel + Tickets");

  const renderLinks = links?.map((link) => (
    <Ticket
      key={link.name}
      name={link.name}
      icon={<link.icon size={23} />}
      currentLink={currentLink}
      setCurrentLink={setCurrentLink}
    />
  ));
  return <div className="flex justify-center">{renderLinks}</div>;
}

export default Tickets;
