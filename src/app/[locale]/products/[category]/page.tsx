import CategoryClient from "@/components/layout/CategoryClient";
import { categories } from "@/data/categories";

export default async function ProductSubCategoryPage({
  params,
}: {
  params: Promise<{ category: string; locale: string }>;
}) {
  // Await the params since it's now a Promise in Next.js 15
  const { category: categorySlug } = await params;

  const category = categories.find((c) => c.slug === categorySlug);

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
