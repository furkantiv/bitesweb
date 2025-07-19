import React from "react";

type Column = {
  title: string;
  dataKey: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type DataTableProps = {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
};

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  className = "mb-14",
}) => {
  return (
    <div className={`overflow-x-auto rounded-lg ${className}`}>
      <table className="min-w-full rounded-lg overflow-hidden border border-[#363d41]">
        <thead>
          <tr className="bg-[#282e33]">
            {columns.map((col, idx) => (
              <th
                key={col.dataKey || idx}
                className={
                  `px-4 py-2 text-left font-semibold text-base text-gray-200 border-b border-[#363d41]` +
                  (idx !== columns.length - 1
                    ? " border-r border-[#363d41]"
                    : "")
                }
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-3 text-left text-gray-400"
              >
                Kayıt bulunamadı.
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b border-[#363d41] last:border-b-0"
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={col.dataKey || colIdx}
                    className={
                      `px-4 py-3 text-gray-100 text-left ` +
                      (colIdx !== columns.length - 1
                        ? " border-r border-[#363d41]"
                        : "")
                    }
                  >
                    {col.render
                      ? col.render(row[col.dataKey], row)
                      : row[col.dataKey]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
