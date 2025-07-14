interface ProductHeaderProps {
  title: string;
  description: string;
}
export default function ProductHeader({
  title,
  description,
}: ProductHeaderProps) {
  return (
    <header className="pt-3 pb-6 flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-base text-white leading-snug">{description}</p>
    </header>
  );
}
