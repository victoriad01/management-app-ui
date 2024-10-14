import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className=" md:flex justify-between items-center p-4">
      <div className="flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent p-2 w-[200px] outline-none"
        />
      </div>

      <div className="flex justify-around md:items-center gap-6 mt-4 md:mt-0">
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer ">
          <Image src="/message.png" alt="message icon" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="message icon"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex justify-center items-center bg-purple-500 text-white rounded-full text-sm">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 text-md">James Fred</span>
          <span className="text-[10px] text-gray-500 text-right ">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar icon"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
