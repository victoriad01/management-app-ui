import Annoucement from "@/components/Annoucement/Annoucement";
import EventCalender from "@/components/Calendar/EventCalender";
import AttendanceChart from "@/components/Charts/AttendanceChart";
import CountChart from "@/components/Charts/CountChart";
import FinanceChart from "@/components/Charts/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[400px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[400px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalender />
        <Annoucement />
      </div>
    </div>
  );
};

export default AdminPage;
