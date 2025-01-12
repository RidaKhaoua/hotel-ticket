import { MdShoppingBag } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { THotelAndResorts, TRoomsAndGuestData, TCard } from "@types";
import { img_1, img_2, img_3 } from "@assets/index";


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

export const servicesData: TCard[] = [
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

export const experienceData : TCard[]  =  [
  {
    id: 1,
    title: "Hotel rooms with a good price",
    img: img_1,
    description:
      "Book you fairytale stay at the newly reimagined Disneyland Hotel, the ultimate five-star royal residence",
    btnLabel: "Find out more",
    date: "Unitil 9 January 2025"
  },
  {
    id: 2,
    title: "Hotel rooms with a good price",
    img: img_2,
    description: `Attetion recruits! Prepare to assemble for Marvel Avengers Campus in 
      Walt Disney Studios Park. Discover epic attractions, 
      experiences and your favourite Marvel Super Heroes`,
    btnLabel: "Find out more",
    date: "From 10 January 2025"
  },
  {
    id: 3,
    title: "Hotel rooms with a good price",
    img: img_3,
    description:
      "Book you fairytale stay at the newly reimagined Disneyland Hotel, the ultimate five-star royal residence",
    btnLabel: "Find out more",
    date: "Back on  17 January 2025"
  },
  {
    id: 3,
    title: "Hotel rooms with a good price",
    img: img_3,
    description:
      "Book you fairytale stay at the newly reimagined Disneyland Hotel, the ultimate five-star royal residence",
    btnLabel: "Find out more",
    date:"new"
  },
];