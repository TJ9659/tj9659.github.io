export default function GeneralLayout({ children, header, secondHeader }: any) {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {header}
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-gray-600">
          {secondHeader}
        </h2>
      </div>

      {children}
    </div>
  );
}
