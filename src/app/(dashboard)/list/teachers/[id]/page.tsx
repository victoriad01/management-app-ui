import Annoucement from "@/components/Annoucement/Annoucement";
import BigCalendar from "@/components/Calendar/BigCalendar";
import Performance from "@/components/Charts/Performance";
import FormModal from "@/components/FormModal/FormModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4 ">
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4 ">
          <div className="bg-lamaSky p-4  rounded-md flex flex-1 gap-1">
            <div className="flex items-center md:items-start flex-col md:flex-row gap-4 w-full">
              <div className="flex md:w-1/3">
                <Image
                  src="/photo/hardTeacher.png"
                  alt=""
                  width={144}
                  height={144}
                  className=" rounded-full object-cover"
                />
              </div>
              <div className="flex md:w-2/3 flex-col justify-between gap-4 ">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-semibold text-center md:text-left  ">
                    John Doe
                  </h1>

                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "johndoe",
                      email: "johndoe@gmail.com",
                      firstName: "John",
                      lastName: "Doe",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      birthday: "2000-01-01",
                      sex: "male",
                      image: "/photo/hardTeacher.png",
                    }}
                  />
                </div>

                <p className="text-sm text-gray-500 text-center md:text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <div className="flex items-center  justify-between gap-2  flex-wrap text-xs font-medium">
                  <div className="flex gap-1 justify-start items-center  w-full  2xl:w-1/3">
                    <Image src="/blood.png" width={14} height={14} alt="" />
                    <span>A+</span>
                  </div>
                  <div className="flex gap-1 justify-start items-center  w-full  2xl:w-1/3">
                    <Image src="/date.png" width={14} height={14} alt="" />
                    <span>January 2025</span>
                  </div>
                  <div className="flex gap-1 justify-start items-center  w-full  2xl:w-1/3">
                    <Image src="/mail.png" width={14} height={14} alt="" />
                    <span>user@gmail.com</span>
                  </div>
                  <div className="flex gap-1 justify-start items-center  w-full 2xl:w-1/3">
                    <Image src="/phone.png" width={14} height={14} alt="" />
                    <span>+1 234 567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*           <div className=" md:flex md:flex-wrap  flex-1 gap-4 justify-between "> */}
          <div className="flex flex-col  md:flex-row md:flex-wrap  flex-1 gap-4 justify-between items-center ">
            <div className="flex  gap-4 bg-white w-full md:w-[48%]  lg:w-[45%]  2xl:w-[48%]   p-4 h-fit rounded-md">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className=" object-cover h-8 w-8 "
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <p className="text-sm text-gray-400">Attendance</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white w-full md:w-[48%] lg:w-[45%]  2xl:w-[48%]   p-4 h-fit rounded-md">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className=" object-cover h-8 w-8 "
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <p className="text-sm text-gray-400">Branches</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white w-full md:w-[48%]  lg:w-[45%]  2xl:w-[48%] p-4 h-fit rounded-md">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className=" object-cover h-8 w-8 "
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <p className="text-sm text-gray-400">Lessons</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white w-full md:w-[48%] lg:w-[45%]  2xl:w-[48%]  p-4 h-fit rounded-md">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className=" object-cover h-8 w-8 "
              />
              <div>
                <h1 className="text-xl font-semibold">4</h1>
                <p className="text-sm text-gray-400">Classes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 h-[800px] ">
          <h1 className="text-xl font-semibold">Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md flex flex-col gap-4 ">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Teacher&apos;s Classes
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight ">
              Teacher&apos;s Students
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaYellowLight  ">
              Teacher&apos;s Lessons
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight  ">
              Teacher&apos;s Exams
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight ">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Annoucement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
