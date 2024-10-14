import React from "react";

const Annoucement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className=" text-lg font-semibold mb-2">Annoucements</h1>
        <span className="text-sm text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="bg-lamaSkyLight rounded-md p-4 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2024-01-03
            </span>
          </div>
          <p className="text-sm text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className=" bg-lamaPurpleLight rounded-md p-4 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2024-01-03
            </span>
          </div>
          <p className="text-sm text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2024-01-03
            </span>
          </div>
          <p className="text-sm text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
