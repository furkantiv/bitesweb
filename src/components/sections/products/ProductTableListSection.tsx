import DataTable from "@/components/ui/DataTable";

interface TableColumn {
  title: string;
  dataKey: string;
}
interface TableData {
  [key: string]: string;
}

export interface ProductTableListSectionProps {
  heading?: string;
  columns: TableColumn[];
  data: TableData[];
  listItems: string[];
}

const ProductTableListSection = ({
  heading,
  columns,
  data,
  listItems,
}: ProductTableListSectionProps) => {
  return (
    <section className="w-full grid md:grid-cols-2 gap-8 py-8">
      <div>
        <DataTable columns={columns} data={data} />
      </div>
      <div className="flex items-start">
        <ul className="list-disc pl-5 text-white text-base space-y-2">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductTableListSection;
