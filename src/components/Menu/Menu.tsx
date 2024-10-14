import React from "react";
import { menuItems } from "../Menu";
import Link from "next/link";
import Image from "next/image";

import { role } from "@/lib/data";

export const Menu = () => {
  return (
    <div className="mt-2 text-sm mx-4 ">
      {menuItems.map((menuItem) => (
        <div key={menuItem.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-2">
            {menuItem.title}
          </span>

          {menuItem.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className=" cursor-pointer flex justify-center lg:justify-start items-center gap-4 text-gray-500 py-1 md:px-2 lg:py-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image
                    src={item.icon}
                    alt="menu item icon"
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
