import Select from '@components/ui/Select';
import { hotelAndResortsData, roomsAndGuestData } from '@constants/index';


function SelectChoice() {
  return (
    <div className="flex items-center max-lg:flex-wrap max-lg:gap-4 gap-2 ">
          <div className="w-full">
            <h4 className="font-semibold ml-1 mb-1">Hotels & Resorts</h4>
            <Select
              data={hotelAndResortsData}
              renderItems={(item) => {
                return (
                  <option key={item} className="capitalize"value={item}>
                    {item}
                  </option>
                );
              }}
            />
          </div>

          <div className="w-full">
            <h4 className="font-semibold ml-1 mb-1">Rooms and Guests</h4>
            <Select
              data={roomsAndGuestData}
              renderItems={(item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                );
              }}
            />
          </div>
        </div>
  )
}

export default SelectChoice