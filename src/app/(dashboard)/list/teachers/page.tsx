import FormModal from "@/components/FormModal/FormModal";
import Pagination from "@/components/Pagination/pagination";
import Table from "@/components/Table/Table";
import TableSearch from "@/components/Table/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Techer ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects ",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes ",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone ",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address ",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions ",
    accessor: "actions",
  },
];

const TeacherList = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-start gap-4 py-2 ">
        <Image
          src={item.photo}
          alt="image"
          height={40}
          width={40}
          className="hidden md:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.teacherId}`}>
            <button className="w-7 h-7  flex items-center justify-center rounded-full bg-lamaSky  ">
              <Image src="/view.png" alt="view" height={16} width={16} />
            </button>
          </Link>
          {role === "admin" ? (
            <>
              {/* <FormModal table="teacher" type="update" data={item} /> */}
              <FormModal table="teacher" type="delete" id={item.id} />
            </>
          ) : (
            ""
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className=" flex flex-col md:flex-row items-center gap-4 w-full  md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow ">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow ">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  );
};

export default TeacherList;