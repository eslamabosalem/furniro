function FormSelectBox({
  id,
  label,
  name,
  children,
}: {
  id: string;
  label?: string;
  name?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 w-full">
      <label htmlFor={id} className="mb-3 block">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="py-3 px-3 border border-black/20 rounded-lg w-full"
      >
        {children}
      </select>
    </div>
  );
}
export default FormSelectBox;
