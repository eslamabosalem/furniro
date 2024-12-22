import { MouseEventHandler } from "react";

function Button({
  title,
  className,
  onClick,
}: {
  title: string | React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-goldPrimary uppercase py-4 px-10 font-bold text-white text-xs tracking-wide cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}
export default Button;
