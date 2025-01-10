import { MdShoppingBag } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { THotelAndResorts, TRoomsAndGuestData } from "src/types";

export const links = [
  {
    name: "Hotel + Tickets",
    icon: MdShoppingBag,
  },
  {
    name: "Tickets",
    icon: IoTicketSharp
  }
];

export const hotelAndResortsData: THotelAndResorts = ["All Hotels"]

export const roomsAndGuestData: TRoomsAndGuestData[] = [{
  name:"1 room / 2 Guests",
  icon: IoBed
}]