import CategoryClient from "@/components/layout/CategoryClient";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function ProductSubCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find((c) => c.slug === params.category);

  if (!category) {
    return <div className="text-white">Category not found</div>;
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:px-0 md:pt-20 w-full min-h-screen items-center justify-center bg-transparent overflow-hidden">
      <CategoryClient
        items={category.items}
        name={category.name}
        categorySlug={category.slug}
      />
    </div>
  );
}
