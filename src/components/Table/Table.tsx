import { Teacher } from "@/app/(dashboard)/list/teachers/page";
import React from "react";

interface Columns {
  header: string;
  accessor: string;
  className?: string;
}

interface TablePropsType {
  columns: Columns[];
  renderRow: (item: any) => React.ReactNode; // | (item: Teacher) => void
  data: any[];
}

const Table = ({ columns, renderRow, data }: TablePropsType) => {
  return (
    <table className="w-full mt-12 ">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((column) => (
            <th key={column.accessor} className={column.className}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
