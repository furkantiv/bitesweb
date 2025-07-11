interface ProductHeaderProps {
  title: string;
  description: string;
}
export default function ProductHeader({
  title,
  description,
}: ProductHeaderProps) {
  return (
    <header className="pb-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-200">{description}</p>
    </header>
  );
}
