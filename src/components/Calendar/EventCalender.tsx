"use client";

import { time } from "console";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem, ipsum dolor",
    description: "Lorem, ipsum dolor sit amet elit.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    id: 2,
    title: "Lorem, event ipsum dolor",
    description: "Lorem, event ipsum dolor sit amet elit.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    id: 3,
    title: "Lorem, develop ipsum",
    description: "Lorem, develop ipsum dolor sit amet  elit.",
    time: "12:00 PM - 2:00 PM",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="rounded-md flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
      </div>

      <div className="p-4 rounded-md bg-white">
        <div className="flex justify-between items-center">
          <h1 className=" text-lg font-semibold mb-2 ">Events</h1>
          <Image
            src="/moreDark.png"
            alt="dark more"
            width={20}
            height={20}
            className=" cursor-pointer "
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-2 md:p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            >
              <div className="flex flex-col ">
                <div className="flex justify-between w-full items-center">
                  <h1 className=" text-sm md:text-base font-semibold text-gray-600">
                    {event.title}
                  </h1>
                  <span className=" text-[10px]">{event.time}</span>
                </div>
                <p className=" text-[10px] md:text-sm mt-2 text-gray-400">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
