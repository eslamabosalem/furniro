type Links = {
  id: number;
  name: string;
  path: string;
};
// git push origin main

export const links: Links[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    name: "About",
    path: "#",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];
