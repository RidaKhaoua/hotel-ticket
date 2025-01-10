import { MdShoppingBag } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { THotelAndResorts, TRoomsAndGuestData } from "src/types";

import img_1 from "@assets/img-1.jpg";
import img_2 from "@assets/img-2.jpg";
import img_3 from "@assets/img-3.jpg";

export const links = [
  {
    name: "Hotel + Tickets",
    icon: MdShoppingBag,
  },
  {
    name: "Tickets",
    icon: IoTicketSharp,
  },
];

export const hotelAndResortsData: THotelAndResorts = ["All Hotels"];

export const roomsAndGuestData: TRoomsAndGuestData[] = [
  {
    name: "1 room / 2 Guests",
    icon: IoBed,
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Hotel rooms with a good price",
    img: img_1,
    description:
      "Book you fairytale stay at the newly reimagined Disneyland Hotel, the ultimate five-star royal residence",
    btnLabel: "Discover the Hotel",
  },
  {
    id: 2,
    title: "Hotel rooms with a good price",
    img: img_2,
    description: `Attetion recruits! Prepare to assemble for Marvel Avengers Campus in 
      Walt Disney Studios Park. Discover epic attractions, 
      experiences and your favourite Marvel Super Heroes`,
    btnLabel: "Hero up",
  },
  {
    id: 3,
    title: "Hotel rooms with a good price",
    img: img_3,
    description:
      "Book you fairytale stay at the newly reimagined Disneyland Hotel, the ultimate five-star royal residence",
    btnLabel: "Find out more",
  },
];
