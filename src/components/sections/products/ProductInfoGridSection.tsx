import Image from "next/image";

interface InfoGridCategory {
  title: string;
  items: string[];
}
interface ProductInfoGridSectionProps {
  heading: string;
  categories: InfoGridCategory[];
  image?: string;
}

export default function ProductInfoGridSection({
  heading,
  categories,
  image,
}: ProductInfoGridSectionProps) {
  // Grid'i iki sütuna böl: (sol 3, sağ 3 örneği gibi)
  const mid = Math.ceil(categories.length / 2);
  const left = categories.slice(0, mid);
  const right = categories.slice(mid);

  return (
    <section className=" text-white mb-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {heading ? (
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-8">
            {heading}
          </h2>
        ) : null}

        <div className="flex w-full gap-10 justify-center">
          {/* Solda görsel istersek (örn: logo veya robot foto) */}
          {image && (
            <div className="hidden md:flex flex-col items-center justify-center w-56">
              <Image
                src={image}
                alt="Section visual"
                width={160}
                height={160}
                className=" opacity-100 "
              />
            </div>
          )}
          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {left.map((cat, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                  <ul className="list-disc ml-5 space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-base text-white/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {right.map((cat, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                  <ul className="list-disc ml-5 space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-base text-white/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
