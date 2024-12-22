function FormInput({
  id,
  label,
  type = "text",
  name,
  placeholder,
  required = false,
}: {
  id: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="mb-6 w-full">
      <label htmlFor={id} className="mb-3 block">
        {label}
      </label>
      <input
        required={required}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="py-3 px-3 border border-black/20 rounded-lg block w-full focus:outline-black/30"
      />
    </div>
  );
}
export default FormInput;
