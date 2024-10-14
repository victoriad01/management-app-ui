"use client";

import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 85,
    absence: 25,
  },
  {
    name: "Tue",
    present: 78,
    absence: 22,
  },
  {
    name: "Wed",
    present: 20,
    absence: 80,
  },
  {
    name: "Thur",
    present: 80,
    absence: 20,
  },
  {
    name: "Fri",
    present: 89,
    absence: 11,
  },
];

const AttendanceChart = () => {
  return (
    <div className=" bg-white rounded-lg p-4 h-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className=" text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="dark more" width={20} height={20} />
      </div>
      <div className=" h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "0px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absence"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
