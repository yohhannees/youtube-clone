import React from "react";
import { Items } from "../items/items"

interface SidebarProps {
  // Add any props you need for the Sidebar component
}

interface Item {
  icon: React.ReactNode; // Replace with the correct type of your item's icon
  name: string;
  // Add other properties as needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="flex flex-col justify-between ml-2 mr-2 col-span-1 z-10 shadow-sm md:ml-7 md:mr-0 md:block">
      <ul className="flex flex-col justify-between gap-10 fixed overflow-y-scroll h-[95%]">
        {Items.map((item: Item, index: number) => (
          <li
            className="flex items-center text-center gap-4 transition-none p-3 cursor-pointer hover:text-gray-600 md:p-2"
            key={index}
          >
            {item.icon}{" "}
            <span className="font-semibold pr-4 hidden lg:block">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
