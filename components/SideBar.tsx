"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome, HiSearch } from "react-icons/hi";

import Box from "./Box";
import SideBarItem from "./SideBarItem";

interface Props {
  children: React.ReactNode;
}

const SideBar: React.FC<Props> = ({ children }: Props) => {
  const searchPath = "/search";

  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== searchPath,
        href: "/",
      },
      {
        icon: HiSearch,
        label: "Search",
        active: pathName === searchPath,
        href: searchPath,
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default SideBar;
