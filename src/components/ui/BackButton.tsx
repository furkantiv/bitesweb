import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type BackButtonProps = {
  categorySlug: string;
};

const BackButton: React.FC<BackButtonProps> = ({ categorySlug }) => {
  const t = useTranslations();

  return (
    <div className="p-2">
      <Link
        href={`/products/${categorySlug}`}
        className="flex items-center gap-3 text-white text-[16px] font-medium hover:text-[#2C6BFF] transition w-max focus:outline-none shadow-lg"
        aria-label={t("productNav.backToProducts")}
      >
        <ArrowLeft size={24} strokeWidth={1.5} />
        {t("productNav.backToProducts")}
      </Link>
    </div>
  );
};

export default BackButton;
