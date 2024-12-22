function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-center gap-2 min-w-[250px]">
      <div className="text-5xl lg:text-6xl">{icon}</div>
      <div className="content ">
        <h3 className="font-medium text-xl lg:text-2xl">{title}</h3>
        <p className="text-gray-500 text-md">{body}</p>
      </div>
    </div>
  );
}
export default Feature;
