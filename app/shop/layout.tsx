import FurnitureContext from "@/context/FurnitureContext";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <FurnitureContext>{children}</FurnitureContext>;
}
export default layout;
