import CategoryClient from "@/components/layout/CategoryClient";
import { categories } from "@/data/categories";
import { getTranslations } from "next-intl/server";

export default async function ProductSubCategoryPage({
  params,
}: {
  params: Promise<{ category: string; locale: string }>;
}) {
  const { category: categorySlug } = await params;

  const category = categories.find((c) => c.slug === categorySlug);

  const t = await getTranslations(); // default namespace

  if (!category) {
    return <div className="text-white">{t("productNav.notFound")}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:px-0 md:pt-20 w-full items-center justify-center bg-transparent overflow-hidden">
      <CategoryClient
        items={category.items}
        name={t("categories." + category.slug)}
        categorySlug={category.slug}
      />
    </div>
  );
}
