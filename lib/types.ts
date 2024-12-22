import furniture from "@/lib/furniture.json";

export type FurnitureType = (typeof furniture.products)[number];
