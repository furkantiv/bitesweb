import DataTable from "@/components/ui/DataTable";
import Image from "next/image";

interface TableColumn {
  title: string;
  dataKey: string;
}
interface TableData {
  [key: string]: string;
}

export interface ProductTableSectionProps {
  heading?: string;
  image: string;
  columns: TableColumn[];
  data: TableData[];
  product?: string;
}

const ProductTableSection = ({
  heading = "",
  image,
  columns,
  data,
  product = "",
}: ProductTableSectionProps) => {
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full overflow-hidden md:min-h-[400px] mb-14">
      <div className="w-full md:w-1/2 aspect-[575/385] relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="w-full md:w-1/2 aspect-[575/385] relative md:min-h-[400px] overflow-hidden">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {heading}
        </h2>
        <DataTable
          columns={columns}
          data={data}
          className="md:min-h-[400px] justify-center"
        />
      </div>
    </section>
  );
};

export default ProductTableSection;
