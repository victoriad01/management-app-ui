import Annoucement from "@/components/Annoucement/Annoucement";
import BigCalendar from "@/components/Calendar/BigCalendar";
import EventCalender from "@/components/Calendar/EventCalender";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row h-full">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold"> Schedule </h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* <EventCalender /> */}
        <Annoucement />
      </div>
    </div>
  );
};

export default TeacherPage;
